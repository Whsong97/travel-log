// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')

//const app = express()

// // MIDDLEWARE
// // app.set('views', __dirname + '/views')
// // app.set('view engine', 'jsx')
// // app.engine('jsx', require('express-react-views').createEngine())


// app.use(express.json())
// app.use('/location',require ('./controllers/location'))
// //app.use('/', require('./controllers/'))
// app.use(cors())


// app.get('/', (req, res) => {
//     res.send('Welcome to the best travel log app out there!')
// })

// app.get('*', (req,res) => {
//     res.status(404).send('<h1>404 Page</h1>')
// })


//const PORT = process.env.PORT

// app.listen(PORT, console.log(`listening on port ${PORT}`))




// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(cors());
// app.use(express.json());


// mongoose.connect('mongodb+srv://kohav51187:Pokemon1234@tourapp.jokz0mu.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);


// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }


//     const hashedPassword = await bcrypt.hash(password, 10);


//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {

//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }


//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid password' });
//     }


//     const token = jwt.sign({ userId: user._id }, 'secret-key');

//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });


// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });


require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const location = require('./controllers/locationRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/location', location);

mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
}); 
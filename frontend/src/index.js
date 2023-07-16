import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Home from "./components/pages/home";
import NotFound from "./components/NotFound"
import PostPage from "./components/pages/PostPage";
import MostLikedPost from "./components/pages/MostLikedPost/MostLikedPost";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function App() {
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/location");
      setLocations(response.data);
    } catch (error) {
      console.log("Error fetching locations:", error);
    }
  };

  console.log(locations);

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <AuthContextProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            {/* <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            /> */}
          <Route path="/posts" component={PostPage} />
        <Route exact path="/MostLikedPost" component={MostLikedPost} />
        <Route exact path="/MostCommentPost" component={MostLikedPost} />
        <Route exact path="/Post/:postId" component={PostPage} />
            <Route path="*" element={<Home />} /> {/* Handle 404 */}
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);





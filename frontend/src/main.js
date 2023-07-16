function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.className = `form__message form__message--${type}`;
  }
  function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.nextElementSibling.textContent = message;
  }
  function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.nextElementSibling.textContent = "";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = loginForm.querySelector("#username").value;
      const password = loginForm.querySelector("#password").value;

      const credentials = {
        username: username,
        password: password
      };
      fetch("axios.get('/location') ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(response => {
          if (response.ok) {
            setFormMessage(loginForm, "success", "Login successful!");

            window.location.href = "/dashboard";
          } else {
            throw new Error("Invalid username/password combination");
          }
        })
        .catch(error => {
          setFormMessage(loginForm, "error", error.message);
        });
    });
    document.querySelectorAll(".form__input").forEach((inputElement) => {
      inputElement.addEventListener("blur", (e) => {
        if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
          setInputError(inputElement, "Username must be at least 10 characters in length");
        }
      });
      inputElement.addEventListener("input", () => {
        clearInputError(inputElement);
      });
    });
  });








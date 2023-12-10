import React, { useState } from "react";
import Navbar from "../components/navbar";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/appoi.css"; // Make sure to import your CSS file

const Appointment = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the data to the console
    console.log("Form data submitted:", loginData);

    // Show a toast
    toast.success('Form Submitted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // Reset the input fields
    setLoginData({
      name: "",
      email: "",
      phone: "",
    });

    // Your login logic goes here
    // If you want to perform additional actions or send the data to the server, you can do it here
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ backgroundColor: "#4978F0" }}>
        <div className="row">
          <div className="col-8 mx-auto">

            <div className="login-wrapper d-flex align-items-center justify-content-center vh-100">
              <div className="login-side p-4">
                <div className="my-form__wrapper">
                  <div className="login-welcome-row">
                    <h1>Appointment &#x1F44F;</h1>
                    <p>Please enter your details!</p>
                  </div>
                  <form className="my-form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={loginData.name} // Set value from state
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={loginData.email} // Set value from state
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone:</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        value={loginData.phone} // Set value from state
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <div className="my-form__actions">
                      <div className="my-form__row">
                        <span>Please fill out all inputs fields!</span>
                        and also fill it carefully.
                      </div>
                      <div className="my-form__signup"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Appointment;

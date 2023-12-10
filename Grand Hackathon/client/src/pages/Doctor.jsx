import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import axios from "axios";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  // GET DATA
  const getDoctors = async () => {
    const doctorList = await axios.get("http://localhost:8080/");
    setDoctors(doctorList.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <Navbar />

      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4"
      >
        Our All Doctors
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <table className="table table-striped table-bordered mt-5">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Specialization</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.contactinfo}</td>
                    <td>
                      {/* Pass the doctor data to the Appointment component */}
                      <Link
                        to={{
                          pathname: "/appointment",
                          state: { doctor },
                        }}
                      >
                        <button className="btn btn-success">
                          Book Appointment
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;

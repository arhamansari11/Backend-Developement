import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

const initialstate = {
  name: "",
  specialization: "",
  contactinfo: "",
  schedule: [], // Added schedule field
};

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState(initialstate);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [updatedData, setUpdatedData] = useState(initialstate);

  // GET DATA
  const getDoctors = async () => {
    const doctorList = await axios.get("http://localhost:8080/");
    setDoctors(doctorList.data);
  };

  useEffect(() => {
    getDoctors();
  }, []);

  // POST DATA and UPDATE DATA
  const handleChange = (e) => {
    const dataToUpdate = selectedDoctor ? updatedData : newDoctor;

    if (selectedDoctor) {
      setUpdatedData({
        ...dataToUpdate,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewDoctor({
        ...dataToUpdate,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedDoctor) {
      await axios.put(
        `http://localhost:8080/updDr/${selectedDoctor._id}`,
        updatedData
      );
    } else {
      await axios.post("http://localhost:8080/addDr", newDoctor);
    }

    getDoctors();

    setSelectedDoctor(null);
    setUpdatedData(initialstate);
    setNewDoctor(initialstate);
  };

  // DELETE DATA
  const handleDelete = async (doctorId) => {
    await axios.delete(`http://localhost:8080/delDr/${doctorId}`);
    getDoctors();
  };

  // UPDATE DATA
  const handleUpdate = (doctor) => {
    setSelectedDoctor(doctor);
    setUpdatedData({
      name: doctor.name,
      specialization: doctor.specialization,
      contactinfo: doctor.contactinfo,
      schedule: doctor.schedule, // Added schedule
    });
  };

  return (
    <>
      <Navbar />

      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4"
      >
        Add Doctor
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            {/* Form for adding or updating data */}
            <form onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-4"
                name="name"
                placeholder="Enter Doctor's Name"
                onChange={handleChange}
                value={selectedDoctor ? updatedData.name : newDoctor.name}
              />

              <label className="form-label" htmlFor="specialization">
                Specialization
              </label>
              <input
                type="text"
                className="form-control mb-4"
                name="specialization"
                placeholder="Enter Specialization"
                onChange={handleChange}
                value={
                  selectedDoctor ? updatedData.specialization : newDoctor.specialization
                }
              />

              <label className="form-label" htmlFor="contactinfo">
                Contact Info
              </label>
              <input
                type="text"
                className="form-control mb-4"
                name="contactinfo"
                placeholder="Enter Contact Info"
                onChange={handleChange}
                value={selectedDoctor ? updatedData.contactinfo : newDoctor.contactinfo}
              />

              {/* Additional fields for schedule */}
              {/* You can add input fields for schedule as needed */}

              <button type="submit" className="btn btn-primary btn-block mb-4">
                {selectedDoctor ? "Update Doctor" : "Add Doctor"}
              </button>
            </form>

            <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-3"
      >
        All Doctors Data
      </h1>
            <table className="table mt-5">
              <thead>
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
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdate(doctor)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => handleDelete(doctor._id)}
                      >
                        Delete
                      </button>
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

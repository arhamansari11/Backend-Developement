import React, { useState, useEffect } from "react";
import axios from "axios";
const initialstate = {
  title: "",
  task: "",
};

const Todoapp = () => {
  const [task, setTask] = useState([]);
  const [newtask, setNewtask] = useState(initialstate);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedData, setUpdatedData] = useState(initialstate);

  // GET DATA
  const getdata = async () => {
    const tasks = await axios.get("http://localhost:8080/");
    setTask(tasks.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  // POST DATA and UPDATE DATA
  const handleChange = (e) => {
    const dataToUpdate = selectedUser ? updatedData : newtask;

    if (selectedUser) {
      setUpdatedData({
        ...dataToUpdate,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewtask({
        ...dataToUpdate,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedUser) {
      await axios.put(
        `http://localhost:8080/updTask/${selectedUser._id}`,
        updatedData
      );
    } else {
      await axios.post("http://localhost:8080/addTask", newtask);
    }

    getdata();

    setSelectedUser(null);
    setUpdatedData(initialstate);
    setNewtask(initialstate);
  };

  // DELETE DATA

  const handleDelete = async (userid) => {
    await axios.delete(`http://localhost:8080/delTask/${userid}`);
    getdata();
  };

  // UPDATE DATA

  const handleUpdate = (task) => {
    setSelectedUser(task);
    setUpdatedData({
      title: task.title,
      task: task.task,
    });
  };

  return (
    <>
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-5"
      >
        Todo App
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <label class="form-label" htmlFor="title">
                Title
              </label>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  class="form-control"
                  name="title"
                  placeholder="Enter Your Title"
                  onChange={handleChange}
                  value={selectedUser ? updatedData.title : newtask.title}
                />
              </div>
              <label class="form-label" htmlFor="task">
                Task
              </label>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example2"
                  name="task"
                  class="form-control"
                  placeholder="Enter Your Task"
                  onChange={handleChange}
                  value={selectedUser ? updatedData.task : newtask.task}
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-4">
                {selectedUser ? "Update Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <h1
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-4"
      >
        Todo App Data
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 mx-auto">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Task</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {task.map((tasks) => (
                  <tr key={tasks._id}>
                    <td>{tasks.title}</td>
                    <td>{tasks.task}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleUpdate(tasks)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger ms-3"
                        onClick={() => handleDelete(tasks._id)}
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

export default Todoapp;

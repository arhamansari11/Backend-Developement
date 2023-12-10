import React from "react";
import "../styles/Center.css";
import Doctor from "../assets/docter.jpg";
import { Link } from "react-router-dom";
import Image from "../assets/banner-image.jpg"

const Center = () => {
  return (
    <div>
      <div className="container-fluid bg-color">
        <div className="row">
          <div className="col-12 class">
            <div className="col-lg-6 col-md-6">
              <h1 className="fs-h1">Your Oral Health Matters to Us</h1>
              <h1 className="sc-h1">
                Get a Brighter Smile from London's Best Dentists
              </h1>
              <Link to="/appointment">
                <button className="btn clr" type="submit">
                  Get an Appointment
                </button>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 img-set ">
              <img src={Doctor} alt="Doctor" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <h1 className="d-flex justify-content-center mt-5 heading">
              Get a Dazzling Smile in Lowest Price
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="d-flex justify-content-center mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              tenetur nisi nihil illum eligendi eum esse aut accusamus.
              Obcaecati praesentium facilis nisi ullam culpa ipsum saepe
              veritatis recusandae, nemo non.lorem ipsum and then
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 mx-auto mt-3">
            <Link to="/appointment">
              <button className="btn btn-outline-primary" type="submit">
                Get an Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-3">
            <div class="card">
              <img src={Image}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img src={Image}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img src={Image}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img src={Image}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;

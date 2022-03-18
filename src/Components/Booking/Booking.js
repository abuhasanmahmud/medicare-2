import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
const Booking = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("/fackdata.json")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const filterService = booking.filter((sr) => sr.id == bookingId);
  const sd = filterService[0];
  console.log(sd);

  return (
    <div className="pb-5 ">
      <h1 style={{ color: "#153D8F" }} className="pt-5 pb-5">
        Now Booking your needed services
      </h1>
      <div className="row d-flex container">
        <div className="col-lg-5 col md-6 col-sm-12">
          <div className="card">
            <img className="img-fluid" src={sd?.img} alt="" />
            <div className="card-body">
              <span>{sd?.sdes}</span>
              <h4 style={{ color: "#153D8F" }} className="card-title mb-3 mt-3">
                {sd?.name}
              </h4>
              <p className="card-text">{sd?.des}</p>
            </div>
            <div className="card-footer" style={{ backgroundColor: "#153D8F" }}>
              <Link to="">
                <button className="btn border" style={{ color: "white" }}>
                  Booking {sd?.name}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-7 col-md-6 col-sm-12">
          <form action="" className="w-100 mx-auto login-form mb-3">
            <p>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="enter your name"
              />
            </p>
            <p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="enter your email"
              />
            </p>
            <p>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="address"
              />
            </p>

            <p>
              <input type="submit" value="Booking now" />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

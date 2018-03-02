import React from "react";
import { NavLink, Route } from "react-router-dom";
import img from "../img/concert.jpg";
import imgtwo from "../img/travel.jpg";
import imgthree from "../img/boombox.jpg";

import "./css/Project.css";



export const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projectid"> Projects </h2>
      <div className="project" id="project1">
          <div className="project" id="projectinimg" style={{ backgroundImage: `url(${img})` }} alt="HalenApp"> </div>
        <h3 className="project" id="projecth3"> Halen App </h3>
        <p className="project" id="projectp">Concert event app that uses geolocation to search the events around your area on the day of the event. </p>
        <a className="project" id="projecta" href="https://github.com/DenizSka/HalenApp"> More info </a>
      </div>
      <div className="project" id="project2">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgtwo})` }} alt="Travel Log"> </div>
        <h3 className="project" id="projecth3"> Travel Log </h3>
        <p className="project" id="projectp">Travel site to let you search the top landmarks on your desired city.</p>
        <a className="project" id="projecta" href="https://github.com/DenizSka/TravelLog" > More info </a> |
        <a className="project" id="projecta" href="https://travel-log-project3.herokuapp.com/" > Live Link </a>
      </div>
      <div className="project" id="project3">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgthree})` }} alt="Travel Log"> </div>
        <h3 className="project" id="projecth3"> Rewind </h3>
        <p className="project" id="projectp">This website shows the top ten hits on your birth date.</p>
        <a href="https://github.com/DenizSka/Rewind" className="project" id="projecta"> More info </a> |
        <a href="https://rewindapp.herokuapp.com/" className="project" id="projecta"> Live Link </a>
      </div>
    </div>
  );
};

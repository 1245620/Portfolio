import React from "react"
import "./Skills.css"


export default function Skills(){
    return(
      <section className="skills">
        <br/><br/>
        <br/><br/>
        <h2 className="title">Skills</h2>
        <div className="skill-bars">
    <div className="bar">
      <div className="info">
        <span>HTML</span>
      </div>
      <div className="progress-line html">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>CSS</span>
      </div>
      <div className="progress-line css">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>jQuery</span>
      </div>
      <div className="progress-line jquery">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>Python</span>
      </div>
      <div className="progress-line python">
        <span></span>
      </div>
    </div>
    <div className="bar">
      <div className="info">
        <span>MySQL</span>
      </div>
      <div className="progress-line mysql">
        <span></span>
      </div>
    </div>
  </div>
  </section>
    )
}
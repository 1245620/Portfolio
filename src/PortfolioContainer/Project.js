import React from "react"
import "./Project.css"

export default function Project(){
  return (
    <section className="project" id="project">
    <div className="max-width">
        <h2 className="title">Project</h2>
        <div className="serv-content">
            <div className="card">
                <div className="box">
                    <div className="text">Project 1</div>
                    <p>
                    Chatbot is doing Automate customer service of restaurants . It is created in python using nltk and show in form of website using flask
                    </p>
                        
                        
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text">Project 2</div>
                    <p>TO-Do list is website that can store daily task list.This project is created using NodeJS, ExpressJS  ,Mongodb & Bootstrap-5.</p>
                         
                    
                      
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="text">Project 3</div>
                    <p>Hotel Management System was written in c++. It adapted to provide us reserving rooms, book an event, check the features etc.</p>
                        
                       
                </div>
            </div>
          
        </div>
    </div>
    <br/><br/>
  </section>
  )
}

import React from 'react'
import './Contact.css'

export default function Contact(){
  return (
    
      <section className="contact" id="contact">
        <div className="max-width">
        <br/><br/>
        <br/><br/>
        
            <h2 className="title">
                Contact me
                </h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <p>For any query or any doubts you all can contact me here or get in touch with me. My details are
                        given here.</p>
                    <div className="icons">
                        <div className="row">
                            
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Aryan Katara</div>
                            </div>
                        </div>
                        <div className="row">
                           
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Ahmedabad, Gujarat</div>
                            </div>
                        </div>
                        <div className="row">
                            
                            
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">aryankatara2000@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form className="contact-form" >
                        <div className="fields">
                            <div className="field name">
                                <input type="text" className="fullname" id="Name" name="Name" placeholder="Name"/>
                            </div>
                            <div className="field email">
                                <input type="text" className="email-input" id="Sender" name="Email" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="field">
                            <input type="text" className="subject" id="Subject" name="Subject" placeholder="Subject"/>
                        </div>
                        <div className="field textarea">
                            <textarea className="message" cols="30" rows="10" id="Message" name="Message" placeholder="Message.."></textarea>
                        </div>
                        <div className="button-area">
                            <button className="send-msg"name="send" >Send message</button>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    </section>
    
  )
}


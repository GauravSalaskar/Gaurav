import React, { Component } from "react";
class ContactUs extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ fontSize: "40px", marginLeft: "60px",marginTop:"20px" }}><b>Contact Us</b></h1>
                    <div>
                        <img className="img-fluid" style={{width:"200px"}} src=".\Images\pattern.png" alt="#"></img>
                    </div>
                    <h2 style={{ fontSize: "30px", marginTop: "70px", marginLeft: "40px" }}><b>Have Questions?</b></h2>
                </div>
                <div style={{paddingBottom:"30px"}} className="container">
                    <div className="row">
                        <div className="col-md-6 " >
                            <h4 style={{ marginTop: "30px", marginLeft: "15%" }}>Head Office</h4>
                            <p style={{ marginLeft: "15%", marginTop: "20px" }}>Unit G2, New Udyog Mandir, Mogul Ln, Bethany<br></br>
                                Co-Operative Housing Society, Mahim, Mumbai,<br></br> Maharashtra 400016</p>
                            <p style={{ marginLeft: "15%" }}><b>Phone No.</b> :- 022 49769414<br></br>

                                <b>Email Id</b> :-enquiry@altovahealthcare.com</p>
                            <h4 style={{ marginTop: "50px", marginLeft: "15%" }}>Manufacturing Site Address.:</h4>
                            <p style={{ marginTop: "20px", marginLeft: "15%" }}><b>Blossom Pharmaceuticals</b></p>
                            <p style={{ marginLeft: "15%" }}>Plot No.: 21/22, Tivim Industrial Estate, Karaswada, Bardez,<br></br>
                                Goa- 403526</p>
                            <p style={{ marginLeft: "15%" }}><b>Phone No.</b> :- +91 832 2257596/ 2257597<br></br>

                                <b> Email Id :-</b>blossomcorporate@blossompharm.com</p>
                        </div>
            
                        <div className="col-md-6">
                            <form style={{marginTop:"30px"}}>
                                <input type="text" class="form-control" placeholder="Name" name="Name" /><br></br>
                                <input type="password" class="form-control" placeholder="Email Address" name="Email" /><br></br>
                                <input type="password" class="form-control" placeholder="Subject" name="Subject" /><br></br>
                                <textarea class="form-control" rows="5" id="comment"placeholder="Your Message" name="text"></textarea><br></br>
                                <button style={{marginBottom:"30px",marginTop:"20px"}} type="button" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                 
                </div>
                
            </div>

        );
    }
}
export default ContactUs; 
import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid ">
        <div id="demo" class="carousel slide" data-bs-ride="carousel">


          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src=".\Images\Capture.jpg" alt="#" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src=".\Images\Capture1.jpg" alt="#" class="d-block w-100" />
            </div>
            <div class="carousel-item">
              <img src=".\Images\Capture3.jpg" alt="#" class="d-block w-100" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>
        <div className="container">
          <p style={{ textAlign: "center", fontSize: "18px", paddingTop: "30px",color:"grey" }}>Altova Healthcare is a Goa based pharmaceutical manufacturing and marketing group, backed by our well equipped <br></br> state-of-the-art
            manufacturing, research & development setup, Blossom Pharmaceuticals, established in the year<br></br> 1995 at Tivim Industrial Estate, Goa.</p>
        </div>
        <div>
          <h5 style={{ textAlign: "center", paddingTop: "30px", textDecoration: "underline",textDecorationColor:"darkblue",textDecorationThickness:"3px"}}><b>CERTIFICATIONS</b></h5>
          <div className="container">
            <div className="row">
              <div className="col-md-3 mt-3">
            <img className="img-fluid" style={{ width: "300px" }} src=".\Images\pic1.jpg" alt="#" />
            </div>
            <div className="col-md-3 mt-3">
            <img className="img-fluid" style={{ width: "300px"}} src=".\Images\pic2.jpg" alt="#" /></div>
            <div className="col-md-3 mt-3">
            <img className="img-fluid" style={{ width: "300px" }} src=".\Images\pic3.jpg" alt="#" /></div>
            <div className="col-md-3 mt-3">
            <img className="img-fluid" style={{ width: "300px" }} src=".\Images\pic4.jpg" alt="#" /></div>
            </div>
            <div style={{marginLeft:"-10px"}} className="container-md mt-3 ">
            <img className="img-fluid" style={{ width: "300px" }} src=".\Images\pic5.jpg" alt="#" />
           </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="img-fluid" style={{ width: "600px", marginTop: "30px" }} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.48 PM (1).jpeg" alt="#" />
              </div>
              <div className="col-md-6">
                <h4 style={{ textAlign:"center", marginTop: "30px" }}><b>WELCOME TO ALTOVA.</b></h4>
                <p style={{ textAlign: "center" }}>Medicines are a tricky thing.<br></br>
                  It is TRUST filled in that bottle,<br></br>
                  the pill, the tube or the lotion.<br></br>
                  And that’s what we MANUFACTURE.<br></br>
                  We make trust, in small doses.<br></br>
                  We offer the world, our BELIEF,<br></br>
                  CONVICTION and the HOPE<br></br>
                  of better health.<br></br>
                  That makes us who we are….<br></br>
                  We are ALTOVA</p>
              </div>
            </div>

          </div>
        </div>
        <div style={{ marginTop: "40px" }} className="container">
          <div className="row">
            <div style={{ display: "flex" }} className="col-md-3">
              <img style={{ width: "40px", height: "40px" }} src=".\Images\WhatsApp_Image_2022-11-12_at_7.16.41_PM__1_-removebg-preview.png" alt="#" />
              <p style={{ marginLeft: "20px", marginTop: "10px" }}><b>Topical formulation<br></br> manufacturer</b></p>
            </div>
            <div style={{ display: "flex" }} className="col-md-3">
              <img style={{ width: "40px", height: "40px" }} src=".\Images\WhatsApp_Image_2022-11-12_at_7.16.41_PM-removebg-preview.png" alt="#" />
              <p style={{ marginLeft: "20px", marginTop: "10px" }}><b>Research oriented</b></p>
            </div>
            <div style={{ display: "flex" }} className="col-md-3">
              <img style={{ width: "40px", height: "40px" }} src=".\Images\WhatsApp_Image_2022-11-13_at_1.08.19_AM__1_-removebg-preview.png"alt="#" />
              <p style={{ marginLeft: "20px", marginTop: "10px" }}><b>Quality Assurance</b></p>
            </div>
            <div style={{ display: "flex" }} className="col-md-3">
              <img style={{ width: "40px", height: "40px" }} src=".\Images\WhatsApp_Image_2022-11-13_at_1.08.19_AM-removebg-preview.png"alt="#" />
              <p style={{ marginLeft: "20px", marginTop: "10px" }}><b>National & International <br></br> presense</b></p>
            </div>
          </div>
        </div>
        <div style={{paddingBottom:"30px"}} className="container">
          <div className="row">
            <div className="col-md-3">
            <img style={{ width: "250px", height: "280px", marginTop: "20px",marginLeft:"10%" }} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.48 PM.jpeg"alt="#" />
            <h5 style={{ textAlign:"center",marginTop:"30px" }}><b>CPHI worldwide 2018</b></h5>
            <p style={{fontSize:"10px",textAlign:"center",marginTop:"20px"}}>9 – 11 October 2018 Feria de Madrid – Spain <br></br>
              Visit us at 14.0B23SSP</p>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
import React, { Component } from "react";
class Productd extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h3 style={{ textAlign: "center", textDecoration: "underline", textDecorationColor: "darkblue",marginTop:"30px",textDecorationThickness:"3px" }}><b>Our Star Products</b></h3>
                        <p style={{ textAlign: "center", marginTop: "30px" }}>Altova Healthcare is backed by a fully equipped research team as we<br></br>
                            believe in developing unique formulations and making a difference.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "5%" }} src=".\Images\Abc.png" alt="#" />
                            </div>
                            <div className="col-md-8">
                                <h5 style={{ fontSize: "30px", marginLeft: "-5%", marginTop: "40px" }} className="display-5"><b>FISOFINE</b></h5>
                                <ul style={{ marginTop: "20px", marginLeft: "-5%" }}>
                                    <li>Application : Anal fissure</li>
                                    <li>Nifedipine 0.3% + Lidocaine 1.5%</li>
                                    <li>First time launch in India</li>
                                    <li>DCGI approved</li>
                                    <li>Clinical trials available</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "10%" }} src=".\Images\PQR.png"alt="#" />
                            </div>
                            <div className="col-md-4">
                                <h5 style={{ fontSize: "30px", marginTop: "20px" }} className="display-5"><b>NIPMOMS</b></h5>
                                <ul>
                                    <li>Application: Cracked nipples</li>
                                    <li>Faster healing of nipple trauma<br></br> with reduced nipple pain</li>
                                    <li>Significant emollient action which<br></br> last for many hours</li>
                                    <li>Completely safe for baby and <br></br>mother</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "5%" }} src=".\Images\AAA.png"alt="#" />
                            </div>
                            <div className="col-md-8">
                                <h5 style={{ fontSize: "30px", marginLeft: "-5%", marginTop: "40px" }} className="display-5"><b>MUSCLE RUB</b></h5>
                                <ul style={{ marginTop: "20px", marginLeft: "-5%" }}>
                                    <li>Fast pain relieving cream</li>
                                    <li>Emulgel formulation</li>
                                    <li>Methyl Salicylate 30% + Menthol<br></br> 10% + Camphor 4%</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "10%" }} src=".\Images\BBB.png" alt="#" />
                            </div>
                            <div className="col-md-4">
                                <h5 style={{ fontSize: "30px", marginTop: "20px" }} className="display-5"><b>DENTURE ADHESIVE</b> <br></br><b> CREAM</b></h5>
                                <ul>
                                    <li>Application: Cleansing and fixation <br></br> of dentures</li>
                                    <li>New innovative formulation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "5%" }} src=".\Images\CCC.png" alt="#" />
                            </div>
                            <div className="col-md-8">
                                <h5 style={{ fontSize: "30px", marginLeft: "-5%", marginTop: "40px" }} className="display-5"><b>ENEMA</b></h5>
                                <ul style={{ marginTop: "20px", marginLeft: "-5%" }}>
                                    <li>Types: Saline | Mineral Oil</li>
                                    <li>With flexible lubricated applicator<br></br> tip</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={{padding:"60px"}} className="container">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <img className="img-fluid" style={{ width: "300px", marginLeft: "10%" }} src=".\Images\DDD.png" alt="#" />
                            </div>
                            <div className="col-md-4">
                                <h5 style={{ fontSize: "30px", marginTop: "20px" }} className="display-5"><b>MOISTURISING CREAM</b></h5>
                                <ul>
                                    <li>Enriched with Vit A, Vit D3 and Vit E</li>
                                    <li>Application: dry skin, scrapes, burns <br></br>and nappy rash</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Productd;
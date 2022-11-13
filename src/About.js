import React, { Component } from "react";
class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <h3 style={{ textDecoration:"underline",textDecorationColor:"darkblue",textAlign: "center",marginTop:"30px",textDecorationThickness:"3px" }}><b>About Altova</b></h3><br></br><br></br>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                Altova Healthcare is a Goa based pharmacautical manufacturing and <br></br>marketing group, backed by our
                                well equipped state-of-the-art<br></br> manufacturing, research & development setup, Blossom <br></br> Pharmaceuticals,
                                established in the year 1995 at Tivim Industrial Estate,<br></br>Goa.<br></br><br></br>
                                We have a strong presence in Topical Formulations across various <br></br> segments: <br></br><br></br>
                                Anal Fissures | Antibiotics | Antifungals | Anti-Acne | Enemas | Denture<br></br> Adhesive |
                                Corticosteroid | Emollients | Skin Protectant creams, etc; to<br></br> name a few.<br></br><br></br>
                                Our factory gates are open for audits and evaluation by our valued <br></br>customers. Our factory has been audited by our
                                International Clients only<br></br> to have assured quality and trust in return. Blossom has catered to local<br></br> partners and
                                our efforts continue.<br></br><br></br>
                                Our factory gates has been certified by world renowned institutions and <br></br>agencies like:<br></br><br></br>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src=".\Images\WhatsApp_Image_2022-11-12_at_7.16.46_PM__9_-removebg-preview (1).png" alt="#"/>
                        </div><br></br><br></br><br></br>
                        <br></br>
                        <div className="container">
                            <div>
                            <ul>
                            <li>WHO-GMP</li>
                            <li>MOH-Srilanka</li>
                            <li>US-FDA</li>
                            <li>NAFDAC-Nigeria</li>
                            <li>DPM-Ivory coast</li>
                            <li>DUN and Bradstreet</li>
                            <li>ISO 9001</li>
                            </ul>

                            </div>
                        </div>

                        <div style={{paddingBottom:"30px"}} className="container">
                            <div className="row">
                                <div className="col-md-12">
                            <h5 style={{ color: "darkblue" ,textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>USA|PANAMA|UK|TURKMENISTAN|SRI LANKA|NIGERIA|IVORY COAST</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
import React, { Component } from "react";
class Footer extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: "200px", background: "#151b4a" }} >
                <h4 style={{ color: "white",paddingTop:"10px",textAlign:"center" }}>Altova Healthcare Head Office</h4>
                <p style={{ color: "white",textAlign:"center" }}>Address:- Altova healthcare Unit G-2, Gr Floor,<br></br>
                    New Udyog Mandir, 7-c Mogal Lane,<br></br>
                    Mahim West, Mumbai 400016</p>
                <p style={{ color: "white",textAlign:"center" }}>Tel:- +91 2262377222 / +91 22 24444698 / 99 <br></br>
                    Email:- sales@altovahealthcare.com</p>
            </div>

        );
    }
}
export default Footer;
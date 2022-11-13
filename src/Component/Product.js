import React,{Component} from "react";
class Product extends Component{
    render(){
        return(
            <div style={{paddingBottom:"30px"}} className="container-fluid">
                <div className="row mt-4 mx-3">
                    <div className="col-md-4"> 
                    <img className="img-fluid" style={{width:"400px"}} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.46 PM (5).jpeg" alt="#"/>
                    <p style={{fontSize:"20px",marginLeft:"25%",marginTop:"20px"}}>Liquid / Lotions</p>
                </div>
                <div className="col-md-4">
                <img className="img-fluid" style={{width:"400px"}} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.45 PM (1).jpeg" alt="#"/>
                <p style={{fontSize:"20px", marginLeft:"30%",marginTop:"20px"}}>Export to USA</p>
                </div>
                <div className="col-md-4">
                <img className="img-fluid" style={{width:"400px"}} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.45 PM.jpeg" alt="#"/>
                <p style={{fontSize:"20px",marginLeft:"30%",marginTop:"20px"}}>Ready COPP</p>
                </div>
                <div className="col-md-4 mt-4 ">
                    <img className="img-fluid" style={{width:"400px"}} src=".\Images\WhatsApp Image 2022-11-12 at 7.16.44 PM (1).jpeg" alt="#"/>
                    <p style={{fontSize:"20px",marginLeft:"25%",marginTop:"20px"}}>Creams / Ointments</p>
                </div>
                </div>
            </div>

        );
    }
}
export default Product;
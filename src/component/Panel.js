import React, { Component } from 'react';
 
class Panel extends Component {

	call=(e)=>{

		if(e.target.checked==true){
			e.target.parentElement.parentElement.parentElement.style.border = '2px solid #49a8a9';  
			e.target.parentElement.parentElement.parentElement.style.boxShadow = '0 0 3px';  
		}else{
			e.target.parentElement.parentElement.parentElement.style.border = null;  
			e.target.parentElement.parentElement.parentElement.style.boxShadow = null;  
		}
	};  
	render() { 
	return(

		<div className="container-fluid">
              <div className="row">
                  <div className="col-md-12"  style={{backgroundColor:"#19a7a9",height:"200px"}}> </div> 
                      <div className="categories col-md-8 offset-md-2">
                            <h6 style={{"padding": "24px 0px 4px 0px"}}>Categories</h6>  
                            <hr /> 
                            <p className="greyFont" style={{fontSize:"14px"}}>Select from the action below to enhance the plan</p>
                            <div className="row">

                                  <div className="col-xs-12 col-md-6" style={{marginBottom:"2%"}}>
                                          <div className="card">
                                                <div className="card-body">
                                                      <div className="flex-container">
                                                            <div className="categoriesImg">   
                                                                    <img src="./im.jpg" />                                                                                                                      
                                                            </div> 
                                                            <div>
                                                                  <p className="topic">Topic 1</p> 
                                                                  <p className="tagname">tag Name 1</p>   
                                                                  <p className="cost greyFont">Monthly Cost {"INR 50"}</p>      
                                                            </div>
                                                            <input type="checkbox" className="checkbox-custom" onChange={this.call.bind(this)}/>
                                                      </div>
                                                      <div align="center"> 
                                                            <button type="button" className="btn btn-details btn-sm">Details</button>
                                                            <button type="button" className="btn btn-edit btn-sm">Edit</button> 
                                                      </div>
                                                </div>
                                            </div> 
                                      </div>


                                    <div className="col-xs-12 col-md-6" style={{marginBottom:"2%"}}>
                                          <div className="card">
                                                <div className="card-body">
                                                      <div className="flex-container">
                                                            <div className="categoriesImg">   
                                                                    <img src="./im.jpg" />  
                                                            </div> 
                                                            <div>
                                                                  <p className="topic">Topic 2</p> 
                                                                  <p className="tagname2">tag Name 1</p>   
                                                                  <p className="cost greyFont">Monthly Cost {"INR 50"}</p>   
                                                            </div>
                                                            <input type="checkbox" className="checkbox-custom" onChange={this.call.bind(this)}/>
                                                      </div>
                                                      <div align="center"> 
                                                            <button type="button" className="btn btn-details btn-sm">Details</button>
                                                            <button type="button" className="btn btn-edit btn-sm">Edit</button> 
                                                      </div>
                                                </div>
                                            </div>
                                      </div>

                                  </div>
                                   <div className="row">

                                  <div className="col-xs-12 col-md-6" style={{marginBottom:"2%"}}>
                                          <div className="card">
                                                <div className="card-body">
                                                      <div className="flex-container">
                                                            <div className="categoriesImg">   
                                                                    <img src="./im.jpg" />                                                                                                                      
                                                            </div> 
                                                            <div>
                                                                  <p className="topic">Topic 2</p> 
                                                                  
                                                                  <p className="cost greyFont">Monthly Cost {"INR 50"}</p>      
                                                            </div>
                                                            <input type="checkbox" className="checkbox-custom" onChange={this.call.bind(this)}/>
                                                      </div>
                                                      <div align="center"> 
                                                            <button type="button" className="btn btn-details btn-sm">Details</button>
                                                      </div>
                                                </div>
                                            </div> 
                                      </div>

                                    <div className="col-xs-12 col-md-6" style={{marginBottom:"2%"}}>
                                          <div className="card">
                                                <div className="card-body">
                                                      <div className="flex-container">
                                                            <div className="categoriesImg">   
                                                                    <img src="./im.jpg" />  
                                                            </div> 
                                                            <div>
                                                                  <p className="topic">Topic 4</p> 
                                                                  
                                                                  <p className="cost greyFont">Monthly Cost {"INR 50"}</p>   
                                                            </div>
                                                            <input type="checkbox" className="checkbox-custom" onChange={this.call.bind(this)}/>
                                                      </div>
                                                      <div align="center"> 
                                                            <button type="button" className="btn btn-details btn-sm">Details</button>
                                                      </div> 
                                                </div>
                                            </div>
                                      </div>

                                  </div>
                        </div>  


                 </div>
                 <div align="center"><button className="saveBtn" type="button btn">Save</button></div>    
        </div>
 	);
 }
}

export default Panel;
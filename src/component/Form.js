import React, { Component } from 'react';

class Form extends Component {  
      constructor(props) {
    super(props)
    this.state = {
      title:"",
      body:""
    }
    this.setData = this.setData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 setData(e){
  this.setState({[e.target.name]:e.target.value});

}
onSubmit(e){
  e.preventDefault();
  const post = {
    title: this.state.title,
    body: this.state.body
  }
  //console.log(post);
  
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(post) 
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
 

}
      render() {
        return ( 
          <div className="container-fluid">
              <h1>Add Post</h1>
              <form onSubmit={this.onSubmit}>
                <div>
                  <label>Title:</label>
                  <br/>
                  <input type="text" name="title" onChange={this.setData} value={this.state.title}/>
                </div>
                <div>
                  <label>Body:</label>
                  <br/>
                  <textarea name="body" onChange={this.setData} value={this.state.body}/>
                </div>
                <br/>
                <button type="submit">Submit</button> 
              </form>
          </div>
        );
      }
}

export default Form;

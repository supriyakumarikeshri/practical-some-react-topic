import React, { Component } from 'react';
import Navbar from './component/Navbar'; 
import Home from './component/Home';
import Panel from './component/Panel';
import Contact from './component/Contact';
import Form from './component/Form';
import Hooks from './component/Hooks';
//import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

 

class App extends Component {  
      constructor(props) {
    super(props)
    this.state = {
      items: [
        { text: "Learn JavaScript", done: false }
      ], 
      check1:true
    }
  }

      render() {
        return ( 
          <BrowserRouter>
            <div>
               <Navbar />
                <Route exact path="/" component={Home}/>
                <Route path="/panel" render={() => <Panel txt={this.state.check1}/>}/>
                <Route exact path="/lazyLoading" component={Contact}/>
                <Route exact path="/formSubmit" component={Form}/> 
                <Route exact path="/hooks" component={Hooks}/>
            </div> 
          </BrowserRouter>
        );
      }
}

export default App;
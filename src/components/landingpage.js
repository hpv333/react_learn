import React,{Component} from "react";
import {BrowserRouter , Routes, Route, NavLink,Link} from 'react-router-dom';
import Login from './login';
// import 
import Register from './register';

export default class LandingPage extends Component{


    render(){
        return(
            <div>    
                {/* not happening the routing  */}

        {routing} 
            </div>
        )
    }
}
const Header =  () =>
{
    return(
        <header style= {{margin: 10}}>
            <NavLink to="login"> Login</NavLink>
            <NavLink to="register"> Register</NavLink>
         
             <a href="https://www.lorealparisusa.com" target="_blank"  >Loreal</a> 

        </header>
    )
}
const routing =(
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route exact path="/login" element= {<Login/>}/>
            <Route path="/register" element= {<Register/>}/>
            
        </Routes>
    </BrowserRouter>
)
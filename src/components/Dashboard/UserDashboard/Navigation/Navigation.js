import React, { Component } from 'react';
import './Navigation.css'
import img1 from '../../../../images/logo-sm.png'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component {
    state={
        image:""
    }
    logout=()=>{
        localStorage.removeItem("id")
        localStorage.removeItem("ID")
        localStorage.removeItem("token")
        localStorage.removeItem("email")
        localStorage.removeItem("updated")
        window.location="/"
    }
    componentDidMount(){
        setInterval(() => {
            if(!localStorage.getItem("id")){
                alert("Please login")
                window.location="/login"
            }
        }, 2000);
            
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        axios({
            method: 'POST',
            url: `http://localhost:4000/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( res=> {
            console.log(res);
            this.setState({
                image:res.data.user.image.path ? res.data.user.image.path:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
            })
          })
    }
    render() {
        const {image} =this.state
        return (
            <div className="nav-dashboard">
                <div className="nav-dashboard-top">
                    <div className="nav-dashboard-top-search">
                        <label>
                            <input/><i className="fa fa-search"></i>
                        </label>
                    </div>
                    <div className="nav-dashboard-top-icons">
                        <i class="fa fa-bell-o fa-2x " aria-hidden="true">
                            <div className="notification-dashboard-icon">
                            </div>    
                        </i> 
                    </div>
                    <div className="nav-dashboard-top-pic">
                        <img src={image} alt=""/>
                    </div>
                </div>
                <div className="nav-dashboard-side">
                    <div className="nav-dashboard-side-logo">

                    <img alt="" src={img1}/>
                    <h1>Double Coin</h1>
                    <h3>Investment</h3>
                    </div>
                    <div className="dashboard-items">
                        <i className="fa fa-tasks fa-2x"></i>
                        <Link to="/dashboard/user/dashboard">
                        <h2>Dashboard</h2>
                        </Link>
                        <ul>
                            <li>Notifications</li>
                            <li>Transfer History</li>
                        </ul>
                    </div>
                    <div className="dashboard-items">
                        <i className="fa fa-user fa-2x"></i>
                        <h2>Account</h2>
                        <ul>
                            <li>Features</li>
                            <li>Account information</li>
                            <li>Contact information</li>
                            <li>Referrals</li>
                        </ul>
                    </div>
                    <div className="dashboard-items">
                        <i className="fa fa-newspaper-o fa-2x"></i>
                        <h2>Forms</h2>
                        <ul>
                            <li>Renewal</li>
                            <li>Upgrade</li>
                            <li>Downgrade</li>
                            <li>Termination</li>
                        </ul>
                    </div>
                    <div className="dashboard-items">
                        <i className="fa fa-cog fa-2x"></i>
                        <h2>Settings</h2>
                        <ul>
                            <li>Account</li>
                            <li>Privacy & Security</li>
                            <li>Help & About</li>
                        </ul>
                    </div>
                    <Link onClick={this.logout}>
                        <button>Log Out</button>
                    </Link>
                        
                        
                </div>        
            </div>
        );
    }
}

export default Navigation;
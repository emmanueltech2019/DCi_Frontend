import React, { Component } from 'react';
import "./Account.css"
import { Link } from 'react-router-dom';
import man from "../../../../../images/man.jpeg";
import axios from 'axios';
class Account extends Component {
    state={
        image:null,
        referralsId:null,
        referralsName:null,
        identificationMeans:null,
        identificationNo:null,
        nameOfOrgnisation:null,
        lga:null,
        stateOfOrigin:null,
        MaritalStatus:null,
        DateOfBirth:null,
        ResidentialAddress:null,
        NearestBusStop:null,
        CityTown:null,
        State:null,
        Nationality:null,
        fullname:null,
        email:null,
        accesscode:null,
        phonenumber:null,
        occupation:null,
        gender:null
    }
    componentDidMount(){
        const id= localStorage.getItem("id")
        const token = localStorage.getItem("token")
        axios({
            method: 'post',
            url: `http://localhost:4000/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( response=> {
            console.log(this.state.image);
            this.setState({
                // upToDate:response.data.user.upToDate,
                accesscode:response.data.user.accesscode,   
                fullname:response.data.user.fullname,
                image:response.data.user.image.path,
                email:response.data.user.email,
                phonenumber:response.data.user.phonenumber,
                occupation:response.data.user.occupation,
            })
          })
    }
    render() {
        const {accesscode,image,fullname,email,phonenumber,occupation} =this.state
        return (
            <div className="Account-user-dashboard space-dashbbord-box">
                <div className="Account-user-dashboard-1">
                    <div className="Account-user-dashboard-1-1">
                        <img src={image} alt=""/>
                    </div>
        <h1>{accesscode}</h1>
                    <Link to="/dashboard/user/dashboard/section">
                        <button className="btn-default-color-sm">Begin</button>
                    </Link>
                </div>
                <div className="Account-user-dashboard-2">
                    <div className="Account-user-dashboard-2-1">
                        <h4>Referrals</h4>
                        <span>empty</span>
                    </div>

                    <div className="Account-user-dashboard-2-2">
                    
                        <table class="table table-borderless">
                        <tbody>
                            <tr>
                            <th scope="row">Fullname</th>
                                <td>{fullname}</td>
                            </tr>
                            <tr>
                            <th scope="row">Email</th>
                                <td>{email}</td>
                            </tr>
                            <tr>
                            <th scope="row">Phone</th>
                                <td>+234 {phonenumber}</td>
                            </tr>
                            <tr>
                            <th scope="row">occupation</th>
                                 <td>{occupation}</td>
                            </tr>
                            <tr>
                            <th scope="row">Id</th>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <th scope="row">Referrals</th>
                            <td>090000000000</td>
                            </tr>
                            <tr>
                            <th scope="row">Referrals id</th>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <th scope="row">Phone</th>
                            <td>090000000000</td>
                            </tr>
                        </tbody>
                        </table>
                        <table class="table table-borderless">
                        <tbody>
                        <tr>
                            <th scope="row">Date of birth</th>
                            <td>Mark</td>
                            </tr>
                            <tr>
                            <th scope="row">Marital status</th>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <th scope="row">Residential Address</th>
                            <td>090000000000</td>
                            </tr>
                            <tr>
                            <th scope="row">Nearest bus Stop</th>
                            <td>Mark</td>
                            </tr>
                            <tr>
                            <th scope="row">City/Town</th>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <th scope="row">State</th>
                            <td>090000000000</td>
                            </tr>
                            <tr>
                            <th scope="row">Nationality</th>
                            <td>Jacob</td>
                            </tr>
                            <tr>
                            <th scope="row">State of origin</th>
                            <td>090000000000</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
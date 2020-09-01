import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import UnupdateProfile from '../UnupdateProfile/UnupdateProfile';
import axios from 'axios';
import Dashboard from './Dashboard/Dashboard';

class UserDashboardmain extends Component {
    state={
        upToDate:false,
        id:this.props.match.params.id
    }
    componentDidMount(){
        const id= this.state.id
        const token = localStorage.getItem("token")
        axios({
            method: 'post',
            url: `http://localhost:4000/api/v1/user/dashboarduser/${id}`,
            data: {},
            headers: {
              Authorization: 'Bearer ' + token
            }
          }).then( response=> {
            console.log(response);
            this.setState({
                upToDate:response.data.user.upToDate
            })
          })
    }
    render() {
        const {upToDate} =this.state
        if(upToDate === false){
        return(
            <div>
                <UnupdateProfile/>
            </div>
            )
        }
        else if(upToDate === true){
            return(
                <div>
                    <Navigation/>
                    <Dashboard/>
                </div>
            )
        }
    }
}

export default UserDashboardmain;
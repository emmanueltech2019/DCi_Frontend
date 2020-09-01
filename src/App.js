import React, { Component } from 'react';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Registermain from './components/Auth/Register/Registermain/Registermain';
import RegisterPersonal from './components/Auth/Register/RegisterPersonal/RegisterPersonal';
import Registerverify from './components/Auth/Register/Registerverify/Registerverify';
import Login1 from './components/Auth/Login/Login1/Login1';
import UserDashboardmain from './components/Dashboard/UserDashboard/UserDashboadmain/UserDashboardmain';
import UnupdateProfile1 from './components/Dashboard/UserDashboard/UnupdateProfile/UnupdateProfile1'
import UnupdateProfile2 from './components/Dashboard/UserDashboard/UnupdateProfile/Unupdateprofile2'
import Dashboard from "./components/Dashboard/UserDashboard/UserDashboadmain/Dashboard/Dashboard"


import TransferProof from './components/Auth/Payment/Transfer/TransferProof'
import Payment from "./components/Auth/Payment/Payment"

import BMIBronze from "./components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BMI/BMIBronze"
import BMIGold from "./components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BMI/BMIGold"
import BMISilver from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BMI/BMISilver';
import BMIPlatinium from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BMI/BMIPlatinium';
import BMIDiamond from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BMI/BMIDiamond';

import AMIBronze from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AMI/AMIBronze';
import AMIGold from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AMI/AMIGold';
import AMIPlatinium from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AMI/AMIPlatinium';
import AMIDiamond from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AMI/AMIDiamond';
import AMISilver from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AMI/AMISilver';

import BFIBronze from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BFI/BFIBronze';
import BFIGold from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BFI/BFIGold';
import BFIPlatinium from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BFI/BFIPlatinium';
import BFIDiamond from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BFI/BFIDiamond';
import BFISilver from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/BFI/BFISilver';

import AFIBronze from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AFI/AFIBronze';
import AFIGold from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AFI/AFIGold';
import AFIPlatinium from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AFI/AFIPlatinium';
import AFIDiamond from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AFI/AFIDiamond';
import AFISilver from './components/Dashboard/UserDashboard/UserDashboadmain/investment/SubPlans/AFI/AFISilver';
import Savings from './components/Dashboard/UserDashboard/UserDashboadmain/Savings/Savings';


class App extends Component {
  render() {
    return (
      <div className="">
        <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/services" component={Services}/>

               
              <Route exact path="/savings" component={Savings}/>
              <Route exact path="/register" component={Registermain}/>
              <Route exact path="/register/personal/:id" component={RegisterPersonal}/>
              <Route exact path="/register/verify" component={Registerverify}/>
              <Route exact path="/login" component={Login1}/>
              <Route exact path="/dashboard/user/:id" component={UserDashboardmain}/>
              <Route exact path="/dashboard/user/unupdated-form/one" component={UnupdateProfile1}/>
              <Route exact path="/dashboard/user/unupdated-form/two" component={UnupdateProfile2}/>







              <Route exact path="/payment/:id" component={Payment}/>
              <Route exact path="/payment/:id/proof" component={TransferProof}/>


              <Route exact path="/dashboard/user/dashboard/section" component={Dashboard}/>


              <Route exact path="/dashboard/user/dashboard/bmibronze/section" component={BMIBronze}/>
              <Route exact path="/dashboard/user/dashboard/bmisilver/section" component={BMISilver}/>
              <Route exact path="/dashboard/user/dashboard/bmigold/section" component={BMIGold}/>
              <Route exact path="/dashboard/user/dashboard/bmiplatinium/section" component={BMIPlatinium}/>
              <Route exact path="/dashboard/user/dashboard/bmidiamond/section" component={BMIDiamond}/>


              <Route exact path="/dashboard/user/dashboard/amibronze/section" component={AMIBronze}/>
              <Route exact path="/dashboard/user/dashboard/amigold/section" component={AMIGold}/>
              <Route exact path="/dashboard/user/dashboard/amiplatinium/section" component={AMIPlatinium}/>
              <Route exact path="/dashboard/user/dashboard/amidiamond/section" component={AMIDiamond}/>
              <Route exact path="/dashboard/user/dashboard/amisilver/section" component={AMISilver}/>

              
              <Route exact path="/dashboard/user/dashboard/bfibronze/section" component={BFIBronze}/>
              <Route exact path="/dashboard/user/dashboard/bfigold/section" component={BFIGold}/>
              <Route exact path="/dashboard/user/dashboard/bfiplatinium/section" component={BFIPlatinium}/>
              <Route exact path="/dashboard/user/dashboard/bfidiamond/section" component={BFIDiamond}/>
              <Route exact path="/dashboard/user/dashboard/bfisilver/section" component={BFISilver}/>

              <Route exact path="/dashboard/user/dashboard/afibronze/section" component={AFIBronze}/>
              <Route exact path="/dashboard/user/dashboard/afigold/section" component={AFIGold}/>
              <Route exact path="/dashboard/user/dashboard/afiplatinium/section" component={AFIPlatinium}/>
              <Route exact path="/dashboard/user/dashboard/afidiamond/section" component={AFIDiamond}/>
              <Route exact path="/dashboard/user/dashboard/afisilver/section" component={AFISilver}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

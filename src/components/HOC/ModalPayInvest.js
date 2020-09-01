import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ModalPayInvest extends Component {
    render() {
        const id = localStorage.getItem("id")
        return (
            <div>
                <div className="invest-form">
                        <div className="invest-form-modal-box">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title center" id="exampleModalLabel">Fill Investment Details</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={this.open}>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                
                            </form>
                            </div>
                            <div class="modal-footer">
                                <Link to={`/payment/${id}`}>
                                    <button type="button" class="btn btn-primary">Continue</button>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ModalPayInvest;
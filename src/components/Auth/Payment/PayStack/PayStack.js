import React, { Component } from 'react';
import "./PayStack.css"
class PayStack extends Component {
    render() {
        return (
            <div className="PayStack-box">
                <div className="payment-box-header">
                    <div>
                        <h4>Pay &#x20A6;<span>100,000</span></h4><br/>
                        <p className="payer'sname">emmanuel lucky</p>
                    </div>
                </div>
                <div className="container-pay-box">
                    <h3>Enter your card details to pay</h3>
                <form>
                        <div class="form-group">
                            <label>Card number</label>
                            <input type="text" class="form-control"   placeholder="0000 0000 0000 0000"/>
                        </div>
                        <div class="row">
                        <div class="col">
                        <label >Expiring Date</label>
                        <input type="text" class="form-control" />
                        </div>
                        <div class="col">
                        <label >CVV</label>
                        <input type="text" class="form-control" />
                        </div>
                    </div>
                        
                    </form>
                    <div className="paystack-btn">
                        <button type="button"  className="btn">Back</button>
                        <button type="button"  className="btn">Pay Now</button>
                    </div>

                    </div>
            </div>
        );
    }
}

export default PayStack;
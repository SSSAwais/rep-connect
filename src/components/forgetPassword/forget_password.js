import React from 'react';
import './forget_password.css';
import logo from '../../assets/images/forget-password/MicroGenDX-EC-Logo2.svg'
import Image from 'next/image';

const Forget_password = () => {
    return (
        <div className="main">
            <div className="container-xxl">
                <div className="main-container">
                    <div className="row">
                        <Image src={logo} alt="logo" />
                    </div>
                    <div className='row card_row'>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className='login_header'>
                                    <div>
                                        Reset Password
                                    </div>
                                    <div>
                                        Back To Login
                                    </div>
                                </div>
                                <div className="cred">
                                    <div className="row text message_text">
                                        <div className="message">
                                            <p>We'll email you a secret key. Once you obtain the key, you can use it to Change your Password.</p>
                                        </div>
                                    </div>
                                    <div className="row text">
                                        <div className="col-4">
                                            <label className="lable">username or E-mail </label>
                                        </div>
                                        <div className="col-8">
                                            <div className='input_area'> <input className='input w-100' /> </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <div className="row">
                                    <div className='btn_area'>
                                        <button className='login_btn'> Request Secret Key </button>
                                        <button className='account_btn'> Change Your Password </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forget_password
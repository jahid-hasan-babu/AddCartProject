import {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {OTPVerifyRequest} from "../apiRequest/APIRequest.js";
import { GetEmail } from '../utlity/TokenHelper.js';
import Loader from './Loader.jsx';


const OTPForm = () => {

    const [FormValue,SetFormValue]=useState({UserEmail:GetEmail(),OTP:""});
    const [loader,SetLoader]=useState("d-none");




    const InputOnChange = (key,value) => {
        SetFormValue(FormValue=>({
            ...FormValue,
            [key]:value
        }))
    }


    const submitForm = async () => {
        if(FormValue.OTP.length===0){
            toast.error("OTP Code Required")
        }
        else{
            SetLoader("")
            let msg= await OTPVerifyRequest(FormValue);
            SetLoader("d-none")
            if(msg==="success"){
                toast.success("Request Successful");
                window.location.href="/"
            }
            else {
                toast.error("Request Fail ! Try Again")
            }
        }
    }




    return (
        <>
            <div className="container mt-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card p-5">
                            <h3>OTP Verification</h3>
                            <input value={FormValue.OTP} onChange={(e)=>{InputOnChange('OTP',e.target.value)}} type="text" className="form-control" placeholder="OTP Code"/>
                            <button onClick={submitForm} className="btn my-2 w-100 btn-primary">Next</button>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-center"/>
            </div>
            <Loader visibility={loader}/>
        </>
    );
};

export default OTPForm;
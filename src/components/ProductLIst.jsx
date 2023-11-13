import  {useEffect, useState} from 'react';
import {AddCartRequest, ProductListRequest} from "../apiRequest/APIRequest.js";
import {toast, Toaster} from "react-hot-toast";
import Loader from './Loader.jsx';

const ProductList = () => {

    let [data,SetData]=useState([])
    const [loader,SetLoader]=useState("d-none");


    useEffect(() => {

        (async ()=>{
            SetLoader("")
            let res= await ProductListRequest();
            SetLoader("d-none")
            SetData(res)

        })()

    }, []);


    const AddCart = async (id) => {
        SetLoader("")
        let msg= await AddCartRequest(id)
        SetLoader("d-none")
        if(msg==="success"){
            toast.success("Request Success")
        }
        else {
            toast.error("Request Fail")
        }

    }



    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        data.map((item,i)=>{
                            return(
                                <div key={i} className="col-md-3 p-2">
                                    <div className="card">
                                        <img className="rounded-2" src={item['image']}/>
                                        <div className="card-body">
                                            <h6>{item['title']}</h6>
                                            <button onClick={()=>AddCart(item['id'])} className="btn btn-success">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Loader visibility={loader}/>
            <Toaster position="bottom-center"/>
        </>
    );
};

export default ProductList;
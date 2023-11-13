import { useEffect, useState } from "react";
import { CartListRequest, RemoveCartRequest } from "../apiRequest/APIRequest";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./Loader";


const CartList = () => {

  let [data,SetData]=useState([])
  const [loader,SetLoader]=useState("d-none");
  let [refresh,SetRefresh] = useState([0])

      useEffect(() => {

        (async ()=>{
            SetLoader("")
            let res= await CartListRequest();
            SetLoader("d-none")
            SetData(res)

        })()

    }, [refresh]);

    const RemoveCart = async (id) => {
      SetLoader("")
      let msg= await RemoveCartRequest(id)
      SetRefresh(refresh+1)
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
                                        <img className="rounded-2" src={item['product']['image']}/>
                                        <div className="card-body">
                                            <h6>{item['product']['title']}</h6>
                                            <button onClick={()=>RemoveCart(item['product']['id'])} className="btn btn-danger">Remove</button>
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
  )
}

export default CartList

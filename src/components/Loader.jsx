import loader from "../assets/img/loader.svg"

const Loader = (props) => {
 
      return (
        <div className={props.visibility}>
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img className="loader-size" src={loader}/>
                </div>
            </div>
        </div>
    );
    
  
}

export default Loader

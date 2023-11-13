
import {GetToken} from "./utlity/TokenHelper.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CartListPage from "./Pages/CartLIstPages.jsx";
import OTPPage from "./Pages/OTPPage.jsx";
import ProductLIstPage from './Pages/ProductLIstPage.jsx';
import LogInPage from './Pages/LogInPage.jsx';


const App = () => {


    if(GetToken()){

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductLIstPage/>}/>
                    <Route path="/cart" element={<CartListPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
    else {
     
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ProductLIstPage/>}/>
                    <Route path="/login" element={<LogInPage/>}/>
                    <Route path="/otp" element={<OTPPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }


};

export default App;
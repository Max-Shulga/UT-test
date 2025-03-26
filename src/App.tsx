import './App.css'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Home from "@/views/Home/Home";
import SignUp from "@/views/Auth/Sign-up/SignUp";
import Welcome from "@/views/Welcome/Welcome";
import CookiesNotification from "@/components/CookiesNotification/CookiesNotification";

function App() {

    return (<>
        <Router >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </Router>
        <CookiesNotification />
    </>)
}

export default App

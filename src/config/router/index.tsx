import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import Notfound from "../../screens/notfound";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="*" Component={Notfound}></Route>
            </Routes>
        </Router>
    )
}
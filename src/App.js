import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import Card from "./pages/Card";
import Home from "./pages/Home";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/card" component={Card} exact/>
            </div>
        </div>
    );
}

export default App;

import MenuComponent from "./Components/Layouts/MenuComponent";
import HomeComponent from "./Components/Pages/HomeComponent";
import AboutComponent from "./Components/Pages/AboutComponent";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import ContactComponent from "./Components/Pages/ContactComponent";
import PageNotFountComponent from "./Components/Pages/PageNotFountComponent";
import Students from "./Components/Students/Students";
import AddStudent from "./Components/Students/AddStudent";
import UpdateStudents from "./Components/Students/UpdateStudents";

function App() {
    return (
        <Router>
            <div>
                <div className="container">
                    <MenuComponent/>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/about" component={AboutComponent}/>
                        <Route exact path="/contact" component={ContactComponent}/>
                        <Route exact path="/show-student" component={Students}/>
                        <Route exact path="/add-student" component={AddStudent}/>
                        <Route exact path="/update-students/:id" component={UpdateStudents}/>
                        <Route component={PageNotFountComponent}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

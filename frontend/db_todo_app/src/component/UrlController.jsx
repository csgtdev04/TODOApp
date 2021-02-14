import { Component } from "react";
import AccessCoursesComponent from './AccessCoursesComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddCourseComponent from './AddCourseComponent';
import UpdateCourseComponent from './UpdateCourseComponent'
import LoginComponent from './LoginComponent'
import CreateUserComponent from './CreateUserComponent'

class UrlController extends Component {
    render() {
        return (
            <>
                <Router>
                    <br/><h1><b><em>Get it done<sup> 2</sup></em> 😤</b></h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <Route path="/createUser" exact component={CreateUserComponent} />
                        <Route path="/courses" exact component={AccessCoursesComponent} />
                        <Route path="/addCourse/-1" exact component={AddCourseComponent} />
                        <Route path="/addCourseByUsername/:username" exact component={AddCourseComponent} />
                        <Route path="/listCourseByUsername/:username" exact component={AccessCoursesComponent} />
                        <Route path="/updateCourseByUsername/:username/:id" exact component={UpdateCourseComponent} />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default UrlController;
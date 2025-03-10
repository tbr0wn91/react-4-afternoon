import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Classlist from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";


export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Classlist} path="/classlist/:class" />
        <Route component={Student} path="/student/:id" />
    </Switch>
);



import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound'
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login'
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AddDestination from "./Pages/Home/AddDestination/AddDestination";
import MyOrders from "./Pages/Home/MyOrders/MyOrders";
import AllOrders from "./Pages/Home/AllOrders/AllOrders";
import Guide from "./Pages/Home/Guide/Guide";
import AboutUs from "./Pages/Home/AboutUs/AboutUs";


function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/tourGuide">
              <Guide></Guide>
            </Route>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/addDestination">
              <AddDestination></AddDestination>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/allOrders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

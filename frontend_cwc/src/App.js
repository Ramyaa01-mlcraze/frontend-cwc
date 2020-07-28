import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import DCPU from "./components/dcpu";
import CCI from "./components/cci";
import PO from "./components/po";
import Navigation from "./components/Navigation";
import District from "./components/District";
import ChildrenDetails from "./components/childrendetails";
import Guardiandetails from "./components/Guardiandetails";
import Notification from "./components/Notification";
import Details from "./components/Details";
import ChildrenList from "./components/Childrenlist";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/dcpu" component={DCPU} exact />
            <Route path="/cci" component={CCI} exact />
            <Route path="/po" component={PO} exact />
            <Route path="/district" component={District} exact/>
            <Route path="/childrendetails" component={ChildrenDetails} exact/>
            <Route path="/guardiandetails" component={Guardiandetails} exact/>
            <Route path="/notification" component={Notification} exact/>
            <Route path="/details" component={Details} exact/>
            <Route path="/childrenlist" component={ChildrenList} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

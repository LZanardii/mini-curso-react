import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import CreateLocation from "./pages/CreateLocation";
import Home from "./pages/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>    
                <Route path="/" component={Home} exact/>
                <Route path="/create-location" component={CreateLocation}/>
            </Switch>   
        </BrowserRouter>
    )
}
export default Routes
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MapPage from "../pages/map-page";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={MapPage}
                exact />
        </Switch>
    );
};

export default App;

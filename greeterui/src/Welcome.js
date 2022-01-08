import React from 'react';
import {useRoutes, BrowserRouter as Router} from 'react-router-dom';
import { DAppProvider } from "@usedapp/core";
import routes from './Routes';
const AppRoute = () => {
    const route = useRoutes(routes);
    return route;
};

export default function Welcome() {
    return (
        <DAppProvider config={{}}>
            <Router>
                <AppRoute />
            </Router>
        </DAppProvider>
    )
}
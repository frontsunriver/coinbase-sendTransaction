import React from 'react';
import Layout from './screen/layout';
import Home from './screen/home';
import Signin from './screen/signin';
import Signup from './screen/signup';
import Dashboard from './screen/dashboard';
import BuyToken from './screen/buytoken';

const routes = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "default",
                element: <Home />,
            },
        ],
    },
    {
        path: "/signin",
        element: <Signin />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/buytoken",
        element: <BuyToken />,
    },
];

export default routes;
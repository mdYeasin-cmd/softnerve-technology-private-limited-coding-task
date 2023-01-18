import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import AllStudents from '../../Pages/AllStudents/AllStudents';
import RegisterStudent from '../../Pages/RegisterStudent/RegisterStudent';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/allStudents',
                element: <AllStudents />
            },
            {
                path: '/registerStudent',
                element: <RegisterStudent />
            }
        ]
    }
]);
import React from 'react';
import Head from './components/Head';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import ErrorPage from './components/ErrorPage';
import MainContainer from './components/MainContainer';
import SearchPage from './components/SearchPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: '/',
                element: <MainContainer />
            },
            {
                path: 'watch',
                element: <WatchPage />
            },
            {
                path: 'search/:searchTerm',
                element: <SearchPage />
            }
        ],
        errorElement: <ErrorPage />
    }
])

function App(){
    return (
            <Provider store={appStore} >
                <RouterProvider router={router} />
            </Provider>
        )
}

/* 

Head
Body
    Sidebar
        MenuItems
    MainContainer
        ButtonList
        VideoContainer
            VideoCard



*/

export default App;
import React from 'react';
import Home from './pages/Home';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import Header from './components/header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import Notification from './pages/Notification';
import Message from './pages/Message';
import Search from './pages/Search';
import ReactToastContainer from './components/ReactToast/ReactToastContainer';
import ChatBox from './components/main/message/ChatBox';

function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Header />, children: [
        { path: "/", element: <Home /> },
        { path: "/profile", element: <Profile /> },
        { path: "/search", element: <Search /> },
        { path: "/notification", element: <Notification /> },
        { path: "/message", element: <Message /> },
        { path: "/chatBox", element: <ChatBox /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> }
  ]);

  return (
    <main>
      <RouterProvider router={router} />
      <ReactToastContainer />
    </main>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import ProfileUpdate from '../pages/ProfileUpdate';
import Search from '../pages/Search';
import Notification from '../pages/Notification';
import Message from '../pages/Message';
import ChatBox from '../components/main/message/ChatBox';
import Login from '../authentication/Login';
import SignUp from '../authentication/SignUp';


const router = createBrowserRouter([
    {
        path: "/", element: <Header />, children: [
            { path: "/", element: <Home /> },
            { path: "/profile", element: <Profile /> },
            { path: "/profileUpdate", element: <ProfileUpdate /> },
            { path: "/search", element: <Search /> },
            { path: "/notification", element: <Notification /> },
            { path: "/message", element: <Message /> },
            { path: "/chatBox", element: <ChatBox /> }
        ]
    },
    { path: "/login", element: <Login /> },
    { path: "/signUp", element: <SignUp /> }
]);


export default router;
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactToastContainer from './components/ReactToast/ReactToastContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import router from './routes/router';
import MeowITModal from './components/header/MeowITModal';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <main>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ReactToastContainer />
        <Toaster />
        <MeowITModal />
      </Provider>
    </main>
  );
}

export default App;

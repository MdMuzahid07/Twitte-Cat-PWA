import React from 'react';
import Home from './pages/Home';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import Header from './components/header/Header';

function App() {
  return (
    <main>
      <Header>
        <Home />
      </Header>
    </main>
  );
}

export default App;

// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Loading from './components/Loading';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  if (loading) return <div className="App">
    <Loading />
  </div>

  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Home />
        <AboutMe />
        <Skills />
      </div>
    </Provider>
  );
}

export default App;

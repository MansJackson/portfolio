// eslint-disable-next-line
import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Navbar from './components/Navbar';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <section>
          
        </section>
      </div>
    </Provider>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import under_construction from './under_construction.svg';
function App() {
  return (
    <div className="App">
        <div className="uc__wrapper">
            <div className="uc__details">
                <h1 className="title">WinEth Coming Soon!</h1>
                <h3 className="intro">
                    We are working hard to give you a better experience.
                </h3>
                <p className="uc__description">
                    We are working hard on it & the site may go live very soon. We promise, it will be worth the wait!
                </p>
                {/* <div className="uc__subscribe">
                    <h3>Get Notified When We Go Live</h3>
                    <div className="uc__form">
                        <form>                         
                          <input type="email" className="email" />
                          <input type="submit" className="submit" />
                        </form>
                    </div>
                </div> */}
            </div>
            <div className="uc__art">
                <img src={under_construction} alt='construction' />
            </div>
        </div>
    </div>
  );
}

export default App;

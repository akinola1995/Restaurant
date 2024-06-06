import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Restaurant from './Restaurant';
import Menu from './Menu';
import Cart from './Cart';

function App () {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Restaurant/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;










// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

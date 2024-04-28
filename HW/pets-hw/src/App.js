import {
  Button,
  Footer,
  Header,
  Input,
  Nav,
  Slider,
} from './components';
import { Home } from './pages'
import { Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Header>
      <Nav>
        <Link to='/' element={<Home></Home>}></Link>
      </Nav>
    </Header>
    <Footer></Footer>
      
    </>
  );
}

export default App;

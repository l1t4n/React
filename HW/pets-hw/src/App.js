import {
  DogInfo,
  Footer,
  Header,
} from './components';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './pages';

function App() {
  return (
    <div className='app'>
    <Header>
    </Header>

    <Routes className='main'>
        <Route path="/" element={<DogInfo></DogInfo>} />
        <Route path="/gallery" element={<Gallery></Gallery>} />
    </Routes>

    

    <Footer></Footer>
      
    </div>
  );
}

export default App;

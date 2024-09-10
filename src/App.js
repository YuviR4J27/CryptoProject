import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import CoinPage from './Pages/Coins';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          {/* <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

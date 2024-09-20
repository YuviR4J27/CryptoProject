import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home';
import DashboardPage from './Pages/DashboardPage';
import CoinPage from './Pages/Coins';
import ComparePage from './Pages/Compare';
import Watchlist from './Pages/Watchlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer style={{zIndex: 99999}}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/coin/:id' element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/watchlist' element={<Watchlist />} />
          {/* <Route path='/' element={<HomePage/>}/>
          <Route path='/' element={<HomePage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

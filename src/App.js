import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import CartDetail from './components/CartDetail/CartDetail';
import Header from './components/Header/Header';
import Culture from './Pages/Culture/Culture';
import Home from './Pages/Home/Home';
import Sports from './Pages/Sports/Sports';
import Memes from './Pages/Memes/Memes';
import Political from './Pages/Political/Political';
import Review from './Pages/Review/Review';
import NewsDetail from './components/NewsDetail/NewsDetail';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:detailId' element={<CartDetail />}/>
        <Route path='/news/:newsId' element={<NewsDetail />}/>
        <Route path='/culture' element={<Culture />}/>
        <Route path='/sports' element={<Sports />}/>
        <Route path='/memes' element={<Memes />}/>
        <Route path='/political' element={<Political />}/>
        <Route path='/review' element={<Review />}/>
      </Routes>
    </div>
  );
}

export default App;


import './App.scss';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { Route,Routes  } from 'react-router-dom';
import Week from './components/pages/Week/week';
import Home from './components/pages/Home/home';
import Work from './components/pages/Work/work';

function App() {
  return (
    <div className="App">
    
      <Header/>
       <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/block"} element={<Week/>}/>
        <Route path={"/work"} element={<Work/>}/>
       </Routes>
       <Footer/>

      
    </div>
  );
}

export default App;

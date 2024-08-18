import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div>
     <Navbar/>
     {/* <Header/> */}
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;

import Home from "./pages/home/Home.jsx"
import Profile from "./pages/Profile/Profile.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='blur' style={{top: '-18%', right: '0'}}></div>
      <div className='blur' style={{top: '-35%', right: '-7rem'}}></div>
      {/* <Home /> */}
      <Profile/>
      {/* <Auth/> */}
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import Messages from './components/messages';
import Nav from './components/Nav';
import MsgId from './components/MsgId';


function App() {
  return (
    <div className="App">
       <Router>
      <Nav/>

      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/msg" element={<Messages/>} />
        <Route path="/msg/:id" element={<MsgId/>} />
        <Route path="/*" element={<Navigate replace to="/" />} />
       </Routes>
       </Router>

      
      
    </div>
  );
}

export default App;

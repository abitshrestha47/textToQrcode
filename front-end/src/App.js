import './App.css';
import UserField from "./components/UserField";
import Navigation from './components/Navigation';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<UserField/>}/>
        <Route path="/qrImage" element={<Navigation/>}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

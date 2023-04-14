import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";
import { EnterOrRegister } from './pages/EnterOrRegister';

import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enter" element={<EnterOrRegister />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
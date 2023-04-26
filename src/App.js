import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";
import { Footer }  from "./components/Footer"
import { EnterOrRegister } from './pages/EnterOrRegister';

import "./css/App.css"

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
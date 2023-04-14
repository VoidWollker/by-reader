import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";
import { EnterOrRegister } from './pages/EnterOrRegister';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enter" element={<EnterOrRegister />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

export default App;
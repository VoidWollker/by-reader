import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import { AppRouter } from './Routes';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
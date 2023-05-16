import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";
import { Footer }  from "./components/Footer"
import { EnterOrRegister } from './pages/EnterOrRegister'
import { Product} from "./pages/Product"

import "./css/App.css"
import { AuthProvider } from 'react-auth-kit';

function App() {
  return (
    <AuthProvider 
      authType = {'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
      <BrowserRouter>
        <Header />
        <div className="app-body">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/enter' element={<EnterOrRegister />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
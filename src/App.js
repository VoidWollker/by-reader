import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Header }  from "./components/Header"
import { Home } from "./pages/Home";
import { Footer }  from "./components/Footer"
import { EnterOrRegister } from './pages/EnterOrRegister'
import { Product } from "./pages/Product"
import { Profile } from "./pages/Profile"

import "./css/App.css"
import { UserProvider } from './Context/UserContext';

function App() {

  return (
      <BrowserRouter>
        <UserProvider>
          <Header />
          <div className="app-body">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/enter' element={<EnterOrRegister />} />
              <Route path='/product' element={<Product />} />
              <Route path='/profile' element={<Profile selectedIndex={0}/>} />
              <Route path='/profile/bookShelf' element={<Profile selectedIndex={4}/>} />
            </Routes>
          </div>
          <Footer />
        </UserProvider>
      </BrowserRouter>
  );
}

export default App;
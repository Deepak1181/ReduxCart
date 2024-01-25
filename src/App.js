import Cart from './Component/Cart';
import Header from './Component/Header';
import Home from './Component/Home';
import './style/app.scss';
import {Toaster} from "react-hot-toast"
import {BrowserRouter , Routes ,Route}  from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/'element={<Home/>} />
    <Route path='/cart'element={<Cart/>} />

    </Routes>
    <Toaster/>
    </BrowserRouter>
  );
}

export default App;

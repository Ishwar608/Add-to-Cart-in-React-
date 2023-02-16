import { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CradItems from './components/AllCard/CradItems';
import CartList from './components/ProductList/CartList';
import Header from './pages/Header';
import store from './store/store';


function App() {
  const [inpt,setInput] = useState('');

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  return (
    <Provider store={store}>
      <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} setInput={setInput}/>
      <Routes>
        <Route path='/' element={<CradItems open={mobileOpen} inpt={inpt}/>} />

        <Route path='cartlist' element={<CartList open={mobileOpen} inpt={inpt}/>} />

      </Routes>
    </Provider>
  );
}

export default App;

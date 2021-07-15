
import './App.css';

import TopTitle from './Component/TopTitle/TopTitle';
import CoverPhoto from './Component/CoverPhoto/CoverPhoto'
import NavigationBar from './Component/NavigationBar/NavigationBar'
import Carousal from './Component/Carousal/Carousal';
import ProductView2 from './Component/product2/ProductView2'
import Product3 from '../src/Component/Product3/Product3'
import Product4 from '../src/Component/Product4/Product4'
import Product5 from '../src/Component/Product5/Product5'
import StoreData from './Component/StoreData/StoreData2';
import AuthoButton from './Component/LoginButton/AuthoButton';
import Cart from './Component/Cart/Cart'
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import PrimarySearchAppBar from './Component/NavMetarialUi/NavMeta';

function App() {

  const {user, isAuthenticated} = useAuth0()
  const [StoreDatas, setStoreDatas] = useState()
  const [StopLoad, setStopLoad] = useState(201)

  if(isAuthenticated & StopLoad === 201 ){
    if(user.name === 'Mohabbat Shikder Kowshik'){
      setStoreDatas( <StoreData />)
      setStopLoad(200)
      console.log("here am I")
    }
  }



  return (
    <div className="App">
      {/* <PrimarySearchAppBar /> */}
      <AuthoButton/>
      <TopTitle />
      <CoverPhoto />
      <NavigationBar />
      <Carousal/>
      <ProductView2/>
      <Product3/>
      <Product4 />
      <Product5 />

      <br/>
      
      {StoreDatas}


      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;

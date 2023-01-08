import {Container} from "react-bootstrap";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceorderScreen from "./screens/PlaceorderScreen"
import OrderScreen from "./screens/OrderScreen"
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main className="py-3">
                <Container>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen/>}/>
                        <Route path="/product/:id" element={<ProductScreen/>}/>
                        <Route path="/cart" element={<CartScreen/>}>
                            <Route path=":id" element={<CartScreen/>}/>
                        </Route>
                        <Route path='/login' element={<LoginScreen/>}/>
                        <Route path='/register' element={<RegisterScreen/>}/>
                        <Route path='/profile' element={<ProfileScreen/>}/>
                        <Route path='/shipping' element={<ShippingScreen/>}/>
                        <Route path='/payment' element={<PaymentScreen/>}/>
                        <Route path='/placeorder' element={<PlaceorderScreen/>}/>
                        <Route path='/order/:id' element={<OrderScreen/>}/>
                    </Routes>
                </Container>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

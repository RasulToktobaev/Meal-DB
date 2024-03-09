
import ProductsList from "./components/ProductsList";
import { Route, Routes} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout/>}>
                    <Route index element={<ProductsList/>} />
                    <Route path='/register' element={<h1>REGISTER</h1>} />
                    <Route path='products/:category/' element={<Products/>} />
                    <Route path='products/:category/:product' element={<Product/>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

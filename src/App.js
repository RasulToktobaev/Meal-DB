
import ProductsList from "./components/ProductsList";
import { Route, Routes} from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<BaseLayout/>}>
                    <Route index element={<ProductsList/>} />
                    <Route path='/register' element={<h1>REGISTER</h1>} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

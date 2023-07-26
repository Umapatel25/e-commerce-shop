import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register"
import Login from "./pages/Login";
import Cart from "./pages/Cart"
  import { 
    Routes,
    BrowserRouter as Router,
    Route,
    Navigate,
  } from "react-router-dom";
  import Success from "./pages/Success";
  import { useSelector } from "react-redux";
  
  const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/productlist"element={<ProductList />}>
          
          </Route>
          <Route path="/product" element={<Product />}>
            
          </Route>
          <Route path="/cart" element={<Cart />}>
            
          </Route>
          <Route path="/success" element={<Success />}>
            
          </Route>
    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}></Route>
          <Route path="/register"  element= {user ? <Navigate to="/" />:<Register/>}>
           
          </Route>
        </Routes>
      </Router>
    );
  };
  
export default App;
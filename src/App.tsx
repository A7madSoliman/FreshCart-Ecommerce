import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Signin from "./Pages/Signin";
import Register from "./Pages/Register";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="products" element={<h1>Products</h1>} />
          <Route path="categories" element={<h1>Categories</h1>} />
          <Route path="brands" element={<h1>Brands</h1>} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

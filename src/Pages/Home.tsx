import axios from "axios";
import HeroSection from "../Components/HeroSection";
import ProductCart from "../Components/ProductCart";
import Loading from "../Components/Loading";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  category: {
    name: string;
  };
  price: number;
  imageCover: string;
  ratingsAverage: number;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);

  async function getAllProducts() {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      console.log(data.data);
      setProducts(data.data);
      return data;
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return isloading ? (
    <Loading />
  ) : (
    <div>
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr
       from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 opacity-50"
      ></div>
      <HeroSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCart
            key={product._id}
            title={product.title}
            category={product.category.name}
            price={product.price}
            image={product.imageCover}
            rating={product.ratingsAverage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

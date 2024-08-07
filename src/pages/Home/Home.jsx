// import { useEffect } from "react";
// import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toggle, toggleBrands } from "../../features/filter/filterSlice";
// import { getProducts } from "../../features/products/productsSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { stock, brands } = useSelector((state) => state.filter);
  // const { products, isLoading } = useSelector((state) => state.product);
  // const { data: products, isLoading } = useGetProductsQuery(null, {
  //   refetchOnMountOrArgChange: true,
  // });
  const { data: products, isLoading } = useGetProductsQuery();

  /*
  useEffect(() => {
    // fetch("https://redux-sarver.vercel.app/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

    dispatch(getProducts());
  }, [dispatch]);
  */

  const activeClass = "text-white bg-indigo-500 border-white";

  let content;

  if (isLoading) {
    content = (
      <div className='w-full text-2xl text-orange-500 font-bold flex justify-center items-center'>
        <p>Loading...!</p>
      </div>
    );
  }

  if (!isLoading && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  if (!isLoading && products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => <ProductCard key={product._id} product={product} />);
  }

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(toggle())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock && activeClass
          }`}>
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") && activeClass
          }`}>
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") && activeClass
          }`}>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;

import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 max-w-7xl mx-auto my-10'>
      {cart.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Cart;

import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const colors = product?.colors?.map((color) => {
    return color?.name;
  });
  const sizes = product?.sizes?.map((color) => {
    return color?.label;
  });

  // cart functionality
  const handleCart = async () => {
    const cartInfo = {
      productId: product?._id,
      email: user?.email,
    };
    const res = await axiosSecure.post("/carts", cartInfo);
    if (res.data.insertedId) {
      toast.success(`${product?.title} added to your cart.`);
    }
  };

  return (
    <div>
      <div className="card card-compact bg-gray-400 shadow-xl">
        <figure>
          <img src={product?.image} alt="Shoes" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">{product?.title}</h2>
          <p>Price : {product?.price_BDT} TK</p>
          <p>Sizes : {sizes.toString()}</p>
          <p>Colors : {colors.toString()}</p>
          <div className="card-actions justify-end">
            <Link to={`/productDetails/${product?._id}`} className="btn btn-outline border-black text-black hover:bg-gray-500">
              Details
            </Link>
            <button onClick={handleCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};

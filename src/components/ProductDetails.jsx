import { useParams } from "react-router-dom";
import useLoadSecureData from "../Hooks/useLoadSecureData";
import LayoutContainer from "../Layout/LayoutComponent/LayoutContainer";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const ProductDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();
  const { data: productData } = useLoadSecureData(`/products/${id}`);

  const colors = productData?.colors?.map((color) => {
    return color?.name;
  });
  const sizes = productData?.sizes?.map((color) => {
    return color?.label;
  });

    // cart functionality
    const handleCart = async () => {
      const cartInfo = {
        productId: productData?._id,
        email: user?.email,
      };
      const res = await axiosSecure.post("/carts", cartInfo);
      if (res.data.insertedId) {
        toast.success(`${productData?.title} added to your cart.`);
      }
    };

  return (
    <div className="py-24 bg-gray-700">
      <LayoutContainer>
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img
            className="object-cover w-full"
            src={productData?.image}
            alt="Article"
          />

          <div className="p-6 flex justify-between items-center">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                Price : {productData?.price_BDT}
              </span>
              <p
                className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabIndex="0"
                role="link"
              >
                {productData?.title}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Colors : {colors.toString()}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Sizes : {sizes.toString()}
              </p>
            </div>
            <div>
              <button onClick={handleCart} className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default ProductDetails;

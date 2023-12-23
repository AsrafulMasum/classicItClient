import useLoadSecureData from "../Hooks/useLoadSecureData";
import ProductCard from "../components/ProductCard";
import LayoutContainer from "../Layout/LayoutComponent/LayoutContainer"

const Products = () => {
  const productsURL = "/products";
  const { data: products } = useLoadSecureData(productsURL);

  return (
    <div>
      <LayoutContainer>
        <h2 className="text-4xl text-center text-white mt-24 border-b-4 pb-4">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product}></ProductCard>
          ))}
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Products;

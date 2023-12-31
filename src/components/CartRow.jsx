import PropTypes from "prop-types";
import useLoadSecureData from "../Hooks/useLoadSecureData";

const CartRow = ({ idx, cart }) => {

  const {data: productData} = useLoadSecureData(`/products/${cart?.productId}`)

  return (

      <tr>
        <th>{idx + 1}</th>
        <td>
          {productData?.title}
        </td>
        <td>
          {productData?.price_BDT} TK
        </td>
        <td>{cart?.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>

  );
};

export default CartRow;

CartRow.propTypes = {
  cart: PropTypes.object,
  idx: PropTypes.number,
};

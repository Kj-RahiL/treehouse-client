
import { MdDelete } from "react-icons/md";
import { deleteProduct, updateQuantity } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";


const CartItem = ({product}) => {

  const dispatch = useAppDispatch();
  const handleQuantity = (type: string, id: string) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (id:string) => {
    dispatch(deleteProduct({id}))
  };
  return (
    <tr className="border-b">
      <td className="py-4 flex items-center space-x-4 ">
        <img src={product?.image} alt={product?.title} className="w-16 h-16 object-cover" />
        <div>
          <p className="font-semibold">{product?.title}</p>
        </div>
      </td>
      <td className="text-center">${product.price}</td>
      <td className="flex justify-center items-center space-x-2 ">
        <button
          onClick={() => handleQuantity( 'decrement', product._id)}
          className="bg-gray-300 px-2 rounded-md"
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => handleQuantity( 'increment' , product._id)}
          className="bg-gray-300 px-2 rounded-md"
        >
          +
        </button>
      </td>
      <td className="text-center ">${(product.price * product.quantity).toFixed(2)}</td>
      <td className="text-center ">
        <button onClick={() => handleRemove(product._id)}>
          <MdDelete className="text-red-500 text-2xl"/>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

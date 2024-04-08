import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import DashboardHeader from "../../../components/SectionHeader/DashboardHeader";
import useProducts from "../../../hooks/useProducts";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const ListProduct = () => {
  const [products, isLoading, refetch] = useProducts();

  /* delete product func */
 const handleDelete = async (id) => {
   try {
     const response = await axios.delete(
       `${import.meta.env.VITE_API_URL}/deleteproduct/${id}`
     );
     refetch();
     toast.success("Product Deleted successfully");
   } catch (error) {
     toast.error(error.message);
   }
 };

  return (
    <>
      <DashboardHeader title={"All Products List"} />
      <div className="my-8">
        <div className="relative overflow-x-auto  sm:rounded-lg">
          {isLoading ? (
            <Loader height={"h-[50vh]"} />
          ) : (
            <table className="w-full text-center text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sub Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Old Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    New Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    key={product.id}
                  >
                    <th>
                      <div className="flex justify-center items-center py-1">
                        <img
                          className="w-9 rounded-lg"
                          src={product.image}
                          alt=""
                        />
                      </div>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {product.name}
                    </th>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.sub_category}</td>
                    <td className="px-6 py-4">${product.old_price}</td>
                    <td className="px-6 py-4">${product.new_price}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center items-center gap-x-4">
                        <button onClick={()=>handleDelete(product.id)}>
                          <FaRegTrashAlt className="w-5 h-5 hover:text-cyan-500" />
                        </button>
                        <button>
                          <FaRegEdit className="w-5 h-5 hover:text-cyan-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ListProduct;

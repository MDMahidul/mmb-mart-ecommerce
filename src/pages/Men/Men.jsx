import Carousel from "../../components/Carousel/Carousel";
import Container from "../../components/Container";
import panjabi from "../../assets/carousel/men/panjabi.jpg";
import shirt from "../../assets/carousel/men/shirt.jpg";
import tshirt from "../../assets/carousel/men/tshirt.jpg";
import jacket from "../../assets/carousel/men/jacket.jpg";
import hoodie from "../../assets/carousel/men/hoddie.jpg";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TypingEffect from "../../components/TypingEffect/TypingEffect";
import Product from "../../components/Product/Product";
import LoadPageTop from "../../components/LoadPageTop/LoadPageTop";
import useCategory from "../../hooks/useCategory";
import Loader from "../../components/Loader/Loader";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";

const Men = () => {
  const [ products ] = useProducts();
  const [showAll, setShowAll] = useState(false);

  const images = [
    { id: 1, src: panjabi },
    { id: 2, src: shirt },
    { id: 3, src: tshirt },
    { id: 4, src: jacket },
    { id: 5, src: hoodie },
  ];
  const words = ["Panjabi", "Shirt", "T-Shirt", "Jacket", "Hoodie"];

  /* use hook to get data from db  */
  const [categoriesWiseProducts, isLoading, isError] = useCategory("men");
  //console.log(men_collection);

  /* show all toggle */
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="pt-12 md:pt-24 dark:bg-gray-500">
      <LoadPageTop />
      <Container>
        <div className=" flex flex-col gap-y-5 md:flex-row justify-center items-center py-10">
          <div className="md:w-1/2  dark:text-white text-center ">
            <p className="text-sm md:text-lg py-2 dark:text-white text-red-500 font-semibold">
              Check Out New Collection{" "}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-6xl  font-semibold ">
              Elevate Your Style with our Premier Men's Collection
            </h2>
            <p className="mt-5 text-base md:text-2xl mb-2 md:mb-0 md:py-4 dark:text-white text-amber-500 font-semibold md:font-semibold">
              Exclusive Collections
            </p>

            {/* typing animation */}
            <TypingEffect words={words} />
          </div>

          <div className="w-10/12 md:w-1/2">
            <Carousel images={images} />
          </div>
        </div>
        <div>
          <SectionHeader heading={"Men"} />
          <div className="flex justify-between mb-5">
            <p className="text-sm md:text-base md:font-semibold dark:text-white">
              Showing {categoriesWiseProducts.length} out of {products.length}{" "}
              products
            </p>
            <div className="flex items-center gap-4">
              <form className="max-w-sm">
                <label htmlFor="underline_select" className="sr-only">
                  Underline select
                </label>
                <select
                  id="underline_select"
                  className="block w-sm text-sm text-gray-500 bg-transparent dark:bg-gray-500 border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-0 focus:border-gray-200 peer px-2"
                >
                  <option selected="">Sort By</option>
                  <option value="shirt">Shirt</option>
                  <option value="tshirt">T-Shirt</option>
                  <option value="panjabi">Panjabi</option>
                  <option value="jacket">Jacket</option>
                  <option value="hoodie">Hoodie</option>
                </select>
              </form>
            </div>
          </div>
          {isError && (
            <p className="text-center text-gray-400 my-4">
              Something went wrong!
            </p>
          )}
          {isLoading ? (
            <Loader height={"h-[40vh]"} />
          ) : (
            <>
              <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 pb-10 md:pb-12">
                {showAll
                  ? categoriesWiseProducts.map((item) => (
                      <Product key={item.id} item={item} />
                    ))
                  : categoriesWiseProducts
                      .slice(0, 8)
                      .map((item) => <Product key={item.id} item={item} />)}
              </div>
            </>
          )}
        </div>
        {categoriesWiseProducts.length > 6 && !showAll && (
          <div className="text-center pb-5 md:pb-10">
            <button onClick={toggleShowAll} type="btn" className="primary-btn">
              Explore More
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Men;

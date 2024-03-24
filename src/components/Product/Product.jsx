import React from 'react';
import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';


const Product = ({item}) => {
  const {id,name,image,new_price,old_price,rating} = item;
    return (
      <Link to={`/product/${id}`} onClick={()=>{window.scrollTo(0,0)}}>
        <div className="w-full max-w-sm bg-white border border-gray-100 rounded-lg hover:shadow-lg dark:bg-gray-500 dark:border-gray-500 relative group">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              className="rounded-t-lg product_card_img"
              src={image}
              alt="product image"
            />
          </div>
          <div className="px-2 md:px-5 pb-5 mt-3 ">
            <h5 className="md:text-xl font-medium md:font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex items-center mt-2.5 mb-5">
              <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating || 0)}
                readOnly
              />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {rating}
              </span>
            </div>
            <div className="flex items-center gap-7">
              <span className="md:text-lg font-semibold text-gray-900 dark:text-white">
                ${new_price}
              </span>
              <span className="md:text-lg font-medium line-through text-gray-400 dark:text-white">
                ${old_price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Product;
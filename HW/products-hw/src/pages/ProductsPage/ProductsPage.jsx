// import { useContext } from "react";
// import { ProductContext } from "../../contexts";
// import { Product } from "../../components";
// import { Link } from "react-router-dom"

// export const ProductsPage = () => {
//   const products = useContext(ProductContext);

//   function onBuyHandler(product) {
//     if (!products.inCart.includes(product)) {
//       products.inCart.push(product);
//     }
//   }

//   return (
//     <div className="py-6 px-64 grid grid-cols-4 gap-8">
//       {products.all.map((product, i) => (
//         <Link key={product.id} to={`/product/${product.id}`}>
//           <Product
//             key={i}
//             data={product}
//             onClickHandler={() => onBuyHandler(product)}
//             text={"Buy"}
//           />
//         </Link>
//       ))}
//     </div>
//   );
// };

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts";
import { Product } from "../../components";

export const ProductsPage = () => {
  const products = useContext(ProductContext);

  function onBuyHandler(product) {
    if (!products.inCart.includes(product)) {
      products.inCart.push(product);
    }
  }

  return (
    <div className="py-6 px-64 grid grid-cols-4 gap-8">
      {products.all.map((product) => (
        <Link key={product.id} to={`/products/${product.id}`}>
          <Product
            data={product}
            onClickHandler={() => onBuyHandler(product)}
            text={"Buy"}
          />
        </Link>
      ))}
    </div>
  );
};


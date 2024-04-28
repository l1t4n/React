import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts";
import { Button } from "../../components";

export const ProductPage = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const product = products.all.find((product) => product.id === parseInt(id));

  function onBuyHandler(product) {
    if (!products.inCart.includes(product)) {
      products.inCart.push(product);
    }
  }

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="py-6 px-64">
      <div className="p-6 rounded-2xl bg-purple-600 flex flex-col gap-20 relative">
        <img src={product.src} alt={product.title} />

        <div className="flex justify-end absolute top-6 right-3">
          <span className="bg-green-700 px-3 py-1">{product.category}</span>
        </div>

        <div className=" w-full justify-between py-6 items-center flex-wrap">
          <h3 className="text-l">{product.title}</h3>
          <h3 className="text-xl">{product.price} $</h3>
        </div>

        <Button
          text="Добавить в корзину"
          onClickHandler={() => onBuyHandler(product)}
        />
      </div>
    </div>
  );
};

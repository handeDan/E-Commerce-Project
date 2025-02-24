import React from "react";

function Description({ product }) {
  console.log(product);

  return (
    <div className="mx-48 max-md:mx-5">
      <div className="flex gap-10 max-md:gap-5 max-md:px-0 p-7 justify-center">
        <p className="text-sm font-semibold text-primary underline">
          Description
        </p>
        <p className="text-sm font-semibold text-primary">
          Additional Information
        </p>
        <p className="text-sm font-semibold text-primary">
          Reviews{" "}
          <span className="text-secondary-green font-semibold"> (0) </span>
        </p>
      </div>
      <hr />
      <div className="flex max-md:flex-col gap-10 py-10">
        <img
          src={product.images[0].url}
          alt=""
          className="w-1/3 max-md:w-full"
        />
        <div className="flex flex-col gap-5 w-1/3 max-md:w-full">
          <p className="text-primary-dark font-bold text-xl">{product.name}</p>
          <p className="text-primary text-sm">{product.description}</p>
          <p className="text-primary text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="text-primary text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5 ">
            <p className="text-primary-dark font-bold text-xl">about</p>
            <p className="text-primary font-bold text-xs">
              &gt; Rating: {product.rating}
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; Price: {product.price}
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; Sell Count: {product.sell_count}
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; Stock: {product.stock}
            </p>
            <p className="text-primary-dark font-bold text-xl">details</p>
            <p className="text-primary font-bold text-xs">
              &gt; Lorem ipsum dolor sit amet.
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; Lorem ipsum dolor sit amet.
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

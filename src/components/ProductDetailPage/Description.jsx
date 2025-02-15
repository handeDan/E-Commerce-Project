import React from "react";

function Description() {
  return (
    <div className="mx-48">
      <div className="flex gap-10 p-7 justify-center">
        <p className="text-sm font-semibold text-primary">Description</p>
        <p className="text-sm font-semibold text-primary">
          Additional Information
        </p>
        <p className="text-sm font-semibold text-primary">
          Reviews{" "}
          <span className="text-secondary-green font-semibold"> (0) </span>
        </p>
      </div>
      <hr />
      <div className="flex gap-10 p-10">
        <img src="/images/productDetail/4.png" alt="" className="w-1/3" />
        <div className="flex flex-col gap-5 w-1/3">
          <p className="text-primary-dark font-bold text-xl">
            the quick fox jumps over{" "}
          </p>
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
          <p className="text-primary text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-5 ">
            <p className="text-primary-dark font-bold text-xl">
              the quick fox jumps over{" "}
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary-dark font-bold text-xl">
              the quick fox jumps over{" "}
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
            <p className="text-primary font-bold text-xs">
              &gt; the quick fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

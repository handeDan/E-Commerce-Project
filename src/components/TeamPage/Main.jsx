import React from "react";

function Main() {
  return (
    <div className="flex max-md:flex-col gap-5">
      {/* Büyük Sol Resim */}
      <div className="w-1/2 max-md:w-full h-[550px]">
        <img
          src="/images/team/1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağdaki Küçük Resimler */}
      <div className="flex flex-col gap-5 w-1/2 h-[530px] max-md:w-full">
        <div className="flex gap-5">
          <img
            src="/images/team/2.jpg"
            alt=""
            className="w-1/2 h-auto object-cover"
          />
          <img
            src="/images/team/3.jpg"
            alt=""
            className="w-1/2 h-auto object-cover"
          />
        </div>
        <div className="flex gap-5">
          <img
            src="/images/team/4.jpg"
            alt=""
            className="w-1/2 h-auto object-cover"
          />
          <img
            src="/images/team/5.jpg"
            alt=""
            className="w-1/2 h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

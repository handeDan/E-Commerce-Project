import React from "react";

function Main() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      {/* Büyük Sol Resim */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/team/1.jpg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Sağdaki Küçük Resimler */}
      <div className="flex flex-col gap-5 w-full md:w-1/2">
        <div className="flex gap-5">
          <img
            src="/images/team/2.jpg"
            alt=""
            className="w-1/2 h-[240px] object-cover"
          />
          <img
            src="/images/team/3.jpg"
            alt=""
            className="w-1/2 h-[240px] object-cover"
          />
        </div>
        <div className="flex gap-5">
          <img
            src="/images/team/4.jpg"
            alt=""
            className="w-1/2 h-[240px] object-cover"
          />
          <img
            src="/images/team/5.jpg"
            alt=""
            className="w-1/2 h-[240px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;

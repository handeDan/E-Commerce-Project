import React from "react";
import { AlarmClock, ChartLine, ChevronRight } from "lucide-react";

function FeaturedPost({ item }) {
  return (
    //TODO: css mobilde ayarlanmalı.
    <div className="border bg-white rounded-sm shadow-sm mb-20 w-1/4 min-w-[300px] ">
      <img src={item.image} alt={item.title} className="w-max" />
      <div className="p-5">
        <div className="flex justify-start gap-3 mb-3">
          <p className="text-secondary-light_blue font-bold">{item.topic_1}</p>
          <p className="text-primary">{item.topic_2}</p>
          <p className="text-primary">{item.topic_3}</p>
        </div>

        <p className="text-primary-dark text-xl font-bold mb-3">{item.title}</p>
        <p className="text-primary font-medium">{item.description}</p>
        <div className="flex justify-between my-5">
          <div className="flex gap-2">
            <AlarmClock className="text-secondary-blue" />
            <p className="text-primary">{item.date}</p>
          </div>
          <div className="flex gap-2">
            <ChartLine className="text-secondary-green" />
            <p className="text-primary">{item.comments}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <p className="text-primary font-bold">{item.link}</p>
          <ChevronRight className="text-secondary-blue" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPost;

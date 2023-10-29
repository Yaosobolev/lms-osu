import React from "react";
import { GiAlliedStar } from "react-icons/Gi";
type Props = {
  name: string;
  desc: string;
  benefit: string[];
  id: string;
};

export const InformationSection = (props: Props) => {
  return (
    <div
      className="container mx-auto max-w-[700px] px-5 py-20 flex flex-col"
      id={props.id}
    >
      <h2 className=" text-4xl  uppercase mb-5 md:text-6xl">{props.name}</h2>
      <p className=" mb-10 md:text-lg">{props.desc}</p>
      <ul className="grid gap-x-5 gap-y-5 grid-cols-[repeat(2,1fr)] grid-rows-[repeat(5,1fr)] ;">
        {props.benefit.map((items, index) => {
          return (
            <li
              key={index}
              className="flex items-center gap-x-2 text-xs md:text-lg "
            >
              <GiAlliedStar /> {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

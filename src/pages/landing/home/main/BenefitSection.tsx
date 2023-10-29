import React from "react";
import { GiAtomicSlashes } from "react-icons/Gi";

export const BenefitSection = () => {
  const benefit = [
    {
      name: "Облачное решение",
      description: "Автообновления, полная доступность, нет лишних действий",
    },
    {
      name: "Интуитивный интерфейс",
      description:
        "Работать с платформой не сложнее, чем работать с почтой или документами",
    },
    {
      name: "Модуль Синхронизации",
      description:
        "Размножайте ваш контент, создавайте и редактируйте связи между уроками с мгновенной синхронизацией",
    },
    {
      name: "Мобильная вёрстка",
      description: "Платформа отлично выглядит на любом устройстве",
    },
  ];
  return (
    <>
      <div className="bg-[url(/landing/bg2.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto max-w-[700px] px-5 py-20 flex flex-col">
          <h2 className=" text-5xl  text-black uppercase  self-center text-center md:text-6xl ">
            почему lms 'название'?
          </h2>
          <ul className="mt-10 grid gap-x-5 gap-y-5 grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] ;">
            {benefit.map((items, index) => {
              return (
                <li
                  key={index}
                  className="flex  gap-x-2 gap-y-1 flex-col text-black"
                >
                  <div className="flex gap-x-2 items-center text-sm md:text-base ">
                    <GiAtomicSlashes /> {items.name}
                  </div>
                  <p className="text-xs md:sm">{items.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

import React from "react";

export const HeaderSection = () => {
  return (
    <>
      <div className="bg-[url(/landing/bg1.png)] h-screen bg-no-repeat bg-cover">
        <div className="container mx-auto max-w-[700px] px-5 py-60 flex flex-col gap-y-10">
          <h1 className=" text-6xl text-black md:text-8xl">
            Умная система для обучения ваших сотрудников
          </h1>
          <p className="text-xl text-black">
            Соберите программу обучения для сотрудников под любую задачу
          </p>
        </div>
      </div>
    </>
  );
};

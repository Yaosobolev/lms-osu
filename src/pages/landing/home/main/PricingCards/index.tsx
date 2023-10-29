import React from "react";

export const PricingCards = () => {
  return (
    <div className=" py-20 flex justify-center items-center" id="pricing">
      <div className="">
        <div className="text-center font-semibold">
          <h1 className="text-4xl md:text-5xl">
            <span className="text-blue-700 tracking-wide">Гибкие </span>
            <span>Тарифы</span>
          </h1>
          <p className="pt-4 text-xl text-gray-400 font-normal w-full px-8 md:w-full md:pt-6 ">
            Выберите тариф под ваши цели
          </p>
        </div>
        <div className="pt-16 flex flex-col gap-y-12 lg:flex-row sm:gap-y-24">
          <div className=" cursor-pointer w-96 p-8 bg-white text-center rounded-3xl pr-10 shadow-xl duration-500 hover:-translate-y-4 hover:bg-gray-200">
            <h1 className="text-black font-semibold text-2xl">Бесплатный</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">₽ </span>
              <span className="text-3xl font-semibold text-gray-400">10</span>
              <span className="text-gray-400 font-medium">/ Пользователей</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <p className="font-semibold text-gray-400 text-left">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Приступить к работе с{" "}
                  <span className="text-black">открытымик курсами</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Доступны<span className="text-black">учебные материалы</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  <span className="text-black">5 TB</span> размер памяти
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white ">
                  <span className="font-medium">Выбрать</span>
                  <span className="pl-2 material-icons align-middle text-sm"></span>
                </p>
              </a>
            </div>
          </div>

          <div className="w-96 cursor-pointer p-8 bg-gray-900 text-center rounded-3xl pr-10 text-white border-4 shadow-xl border-white transform duration-500 hover:-translate-y-4  sm:scale-125 hover:bg-gray-800">
            <h1 className="text-white font-semibold text-2xl">Предприятие</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">10000₽ </span>
              <br />
              <span className="text-3xl  font-semibold">50 </span>
              <span className="text-gray-400 font-medium ">
                / Пользователей
              </span>
            </p>
            <hr className="mt-4 border-1 border-gray-600" />
            <div className="pt-8">
              <p className="font-semibold text-gray-400 text-left">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Все Основные <span className="text-white">фуккции</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Удобный
                  <span className="text-white"> план тестов</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  <span className="text-white">15 TB</span> размер памяти
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span className="font-medium">Выбрать</span>
                  <span className="pl-2 material-icons align-middle text-sm"></span>
                </p>
              </a>
            </div>
            <div className="absolute top-4 right-4">
              <p className="bg-blue-700 font-semibold px-4 py-0.5 rounded-full uppercase text-xs">
                Популярно
              </p>
            </div>
          </div>
          <div className=" cursor-pointer w-96 p-8 bg-white text-center rounded-3xl pl-10 shadow-xl duration-500 hover:-translate-y-4 hover:bg-gray-200">
            <h1 className="text-black font-semibold text-2xl">Корпорация</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">15000₽ </span>
              <span className="text-3xl font-semibold text-gray-400">35</span>
              <span className="text-gray-400 font-medium">/ пользователей</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8">
              <p className="font-semibold text-gray-400 text-left">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Все современные
                  <span className="text-black"> фуккции</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  Задания <span className="text-black">VR</span>
                </span>
              </p>
              <p className="font-semibold text-gray-400 text-left pt-5">
                <span className="material-icons align-middle"></span>
                <span className="pl-2">
                  <span className="text-black">Безлимит</span> на память
                </span>
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                  <span className="font-medium">Выбрать</span>
                  <span className="pl-2 material-icons align-middle text-sm"></span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

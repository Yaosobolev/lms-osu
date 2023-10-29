import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const WORKER_MENU = [
    {
      title: "Возможности",
      href: "#fst-info",
    },
    {
      title: "Тарифы",
      href: "#pricing",
    },
    {
      title: "Внедрение",
      href: "#implementation",
    },
    {
      title: "Отзывы",
      href: "#feedback",
    },
  ];

  return (
    <div className="w-full lg bg-white text-black py-4 px-5">
      <div className=" mx-auto max-w-[700px] px-5">
        <div className="flex justify-between items-center flex-wrap gap-y-2  ">
          <div>
            {" "}
            <Link to="/">
              <img className="h-5" src="/vite.svg" alt="" />
            </Link>
          </div>
          <ul className="flex gap-x-5  justify-end">
            {WORKER_MENU.map((item, index) => {
              return (
                <li key={index} className="items-end">
                  <a
                    className="cursor-pointer duration-300 hover:text-blue-600"
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-x-2 gap-y-2 flex-wrap">
            <Link to="/sign-in">
              <button className=" rounded-lg bg-blue-500 px-2 py-1 duration-500 hover:bg-blue-600 text-white">
                {" "}
                Войти
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="rounded-lg bg-blue-500 px-2 py-1 duration-500 hover:bg-blue-600 text-white">
                {" "}
                Зарегистрироваться
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

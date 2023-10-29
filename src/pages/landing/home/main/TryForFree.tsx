import { Link } from "react-router-dom";

export const TryForFree = () => {
  return (
    <div className="bg-[url(/landing/bg3.png)] bg-no-repeat bg-cover">
      <div className="container mx-auto max-w-[700px] px-5 py-20  ">
        <h2 className="text-5xl text-black uppercase md:text-6xl">
          Начни бесплатно уже сейчас
        </h2>
        <Link to="/sign-up">
          <button className=" rounded-lg text-5xl px-14 py-4  bg-blue-500 text-white flex mx-auto mt-5 duration-500 hover:-translate-y-1 hover:bg-blue-600">
            Начать
          </button>
        </Link>
      </div>
    </div>
  );
};

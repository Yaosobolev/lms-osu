import TestBlock from "../../../components/blocks/testblock";

export default function TestPage() {
  return (
    <div className="p-0 flex flex-col justify-center ">
      <a className="relative top-10" href="/dashboard/mytest/user">
        <button
          type="button"
          className="inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600 active:bg-blue-600 active:border-blue-600 px-5 py-1.5 text-base rounded-lg transition-all duration-300 ease-in-out "
        >
          Назад
        </button>
      </a>
      <div id="Examples" className=" mx-auto scroll-mt-offset col-span-12">
        <span className="text-3xl font-semibold">Мои тесты</span>
      </div>
      <TestBlock
        name="Тест 1"
        progress="1"
        testCount="9"
        buttonName="Начать"
        link="/dashboard/mytest/questions"
      />
      <TestBlock
        name="Тест 2"
        progress="2"
        testCount="3"
        buttonName="Начать"
        link="./tests_storage"
      />
      <TestBlock
        name="Тест 3"
        progress="4"
        testCount="4"
        buttonName="Начать"
        link="./tests_storage"
      />
    </div>
  );
}

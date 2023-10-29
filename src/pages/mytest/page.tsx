import TestBlock from "../../components/blocks/testblock";
import React from "react";

export default function DashboardPage() {
  return (
    <React.Fragment>
      <div className="p-0 flex flex-col justify-center ">
        <div id="Examples" className="mx-auto scroll-mt-offset col-span-12">
          <span className="text-3xl font-semibold">Мои курсы</span>
        </div>
        <TestBlock
          name="Пожарная безопасность"
          progress="1"
          testCount="9"
          buttonName="Открыть"
          ling="/dashboard/mytest/user/test"
        />
        <TestBlock
          name="Курс подготовки сварщиков"
          progress="3"
          testCount="5"
          buttonName="Открыть"
        />
      </div>
    </React.Fragment>
  );
}

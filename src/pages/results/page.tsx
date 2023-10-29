import ResultBlock from "../../components/blocks/resultblock";
import React from "react";

export default function DashboardPage() {
  return (
    <React.Fragment>
      <div className="p-0">
        <div id="Examples" className="scroll-mt-offset col-span-12">
          <span className="text-3xl font-semibold">Мои результаты</span>
        </div>
        <ResultBlock
          name="Тема 1"
          progress="5"
          buttonName="Открыть"
          link="./results/myresults"
        />
        <ResultBlock name="Тема 2" progress="4" buttonName="Открыть" />
      </div>
    </React.Fragment>
  );
}

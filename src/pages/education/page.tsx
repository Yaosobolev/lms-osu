import EducateBlock from "../../components/blocks/educateblock";
import React from "react";
// components/blocks

export default function DashboardPage() {
  return (
    <React.Fragment>
      <div className="p-0">
        <div id="Examples" className="scroll-mt-offset col-span-12">
          <span className="text-3xl font-semibold">Учебный материал</span>
        </div>
        <EducateBlock
          name="Курс 1"
          buttonName="Перейти"
          link="./education/educate"
        />
        <EducateBlock name="Курс 2" buttonName="Перейти" />
      </div>
    </React.Fragment>
  );
}

import { InformationSection } from "./InformationSection";
import { HeaderSection } from "./HeaderSection";
import { BenefitSection } from "./BenefitSection";
import { TryForFree } from "./TryForFree";
import { PricingCards } from "./PricingCards";
import { Implementation } from "./Implementation";
import { Feedback } from "./Feedback";

export const MainSection = () => {
  const FIRST_BENEFITS = [
    "Увеличение продуктивности",
    "Снижение количества ошибок в работе",
    "Тесты, опросники, сертификации",
    "Увлекательное обучение",
    "Единая структура материалов компании",
    "Корпоративная база знаний",
    "Экономия времени менеджера",
    "Автоматическая адаптация новичков",
    "Интеграция с другими системами",
    "Экономия времени сотрудников",
    "Полная статистика о прогрессе обучения",
    "Все сотрудники на одной волне",
  ];
  const SECOND_BENEFITS = [
    "Организационная структура",
    "Редактор курсов",
    "Управление доступом",
    "Каталог курсов",
    "Программы обучения",
    "Дедлайны",
    "Роли",
    "Кастомный дизайн",
    "Мобильный интерфейс",
    "Индивидуальные типы тестов и опросов",
    "Геймификация",
    "Статистика по обучению",
  ];
  return (
    <div className="  dark::text-white w-full ">
      <HeaderSection />
      <InformationSection
        name={"обучение сотрудников"}
        desc={"Адаптация новичков и обучение текущих сотрудников"}
        benefit={FIRST_BENEFITS}
        id={"fst-info"}
      />
      <BenefitSection />
      <InformationSection
        name={"функциональные возможности"}
        desc={""}
        benefit={SECOND_BENEFITS}
        id={"sec-info"}
      />
      <TryForFree />
      <PricingCards />
      <Implementation />
      <Feedback />
    </div>
  );
};

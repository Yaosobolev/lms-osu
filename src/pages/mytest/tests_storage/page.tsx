"use client";
// import { Question } from "@/components/blocks";
import Question from "../../../components/blocks/questionblox";

import React, { useState } from "react";

export default function Questions() {
  const questions = [
    {
      id: 1,
      title: "2 + 2 = ",
      attemps_number: 0,
      question: [
        {
          id: 11,
          title: "0",
          is_right: false,
        },
        {
          id: 12,
          title: "2",
          is_right: false,
        },
        {
          id: 13,
          title: "4",
          is_right: true,
        },
        {
          id: 13,
          title: "10",
          is_right: false,
        },
      ],
    },
    {
      id: 2,
      title: "3 + 2 = ",
      attemps_number: 0,
      question: [
        {
          id: 11,
          title: "0",
          is_right: false,
        },
        {
          id: 12,
          title: "2",
          is_right: false,
        },
        {
          id: 13,
          title: "7",
          is_right: true,
        },
        {
          id: 13,
          title: "10",
          is_right: false,
        },
      ],
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const count = questions.length;

  return (
    <div className="p-0 flex flex-col justify-center ">
      <div id="Examples" className=" mx-auto scroll-mt-offset col-span-12">
        <span className="m-5 text-3xl font-semibold">Прохождение теста</span>
      </div>
      {questions.map((question, index) => (
        <Question
          key={index}
          id={question.id}
          question={question.title}
          progress={question.id}
          answer={question.question.map((one) => (
            <div className="ml-10 flex flex-col items-start">
              <span className="ml-0 text-3xl cursor-pointer m-4">
                <input
                  type="checkbox"
                  name={one.title}
                  value={one.title}
                  className="cursor-pointer appearance-none border-2 transition-all duration-300 ease-in-out border-zinc-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjczOCA2LjM1MmExIDEgMCAxIDEgMS41MjQgMS4yOTZsLTguNSAxMGExIDEgMCAwIDEtMS40MjYuMWwtNC41LTRhMSAxIDAgMSAxIDEuMzI4LTEuNDk1bDMuNzM2IDMuMzIgNy44MzgtOS4yMnoiLz48L2c+PC9zdmc+')] indeterminate:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2ZmZmZmZiIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjUgMTJoLTE1IiAvPgo8L3N2Zz4K')] checked:bg-blue-500 indeterminate:bg-blue-500 rounded-lg w-7 h-7 me-1.5"
                />
                {one.title}
              </span>
              <button
                onClick={prevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Предыдущий вопрос
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Следующий вопрос
              </button>
            </div>
          ))}
          attempt="1"
          attempts="3"
          testCount={count}
        />
      ))}
    </div>
  );
}

// <Question question={
//     question.question.map((item, index) => (
//         question.title
//     ))}
//  answer={questions.map((item, index) => (
//     <div key={item.id} className="ml-10 flex flex-col items-start">
//       {item.question.map((option) => (
//         <span key={option.id} className="ml-0 text-3xl cursor-pointer m-4">
//           <input type="checkbox" name={`question-${item.id}`} value={option.title} className="cursor-pointer appearance-none border-2 transition-all duration-300 ease-in-out border-zinc-100 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 bg-center bg-no-repeat checked:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE3LjczOCA2LjM1MmExIDEgMCAxIDEgMS41MjQgMS4yOTZsLTguNSAxMGExIDEgMCAwIDEtMS40MjYuMWwtNC41LTRhMSAxIDAgMSAxIDEuMzI4LTEuNDk1bDMuNzM2IDMuMzIgNy44MzgtOS4yMnoiLz48L2c+PC9zdmc+')] indeterminate:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI2ZmZmZmZiIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE5LjUgMTJoLTE1IiAvPgo8L3N2Zz4K')] checked:bg-blue-500 indeterminate:bg-blue-500 rounded-lg w-7 h-7 me-1.5" />
//           {option.title}
//         </span>
//       ))}
//     </div>
//   ))}
//  attempt="1" attempts="3" progress="1" testCount="9" buttonName="Начать" link="./huy"/>

import React, { createContext, useState, ReactNode, useContext } from "react";
import questions from "../questions";
import { Question } from "../components/types";

type QuizContextType = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
};

export const QuizContent = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
});

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [questionIndex, setQuestionIndex] = useState(1);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const value = {
    question,
    questionIndex,
    onNext,
    selectedOption,
    setSelectedOption,
  };

  function onNext() {
    setQuestionIndex((currValue) => currValue + 1);
  }

  // const onOptionsSelected = (option: string) => {
  //   setSelectedOption(option);
  //   console.warn("Selected option: ", option);
  // };

  return <QuizContent.Provider value={value}>{children}</QuizContent.Provider>;
}

export const useQuizContext = () => useContext(QuizContent);

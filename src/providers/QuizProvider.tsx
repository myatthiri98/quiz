import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import questions from "../questions";
import { Question } from "../components/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContextType = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
};

export const QuizContent = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  totalQuestions: 0,
  bestScore: 0,
});

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [questionIndex, setQuestionIndex] = useState(1);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const isFinished = questionIndex >= questions.length;

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished === true && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const restart = () => {
    setQuestionIndex(0), setSelectedOption(""), setScore(0);
  };

  const value = {
    question,
    questionIndex,
    onNext,
    selectedOption,
    setSelectedOption,
    score,
    totalQuestions: questions.length,
    bestScore,
  };

  function onNext() {
    if (isFinished) {
      restart();
      return;
    }
    if (selectedOption === question?.correctAnswer) {
      setScore((currScore) => currScore + 1);
    }
    setQuestionIndex((currValue) => currValue + 1);
  }

  const saveBestScore = async (value: number) => {
    try {
      console.log("====================================");
      console.log("Save best Score: ", value);
      console.log("====================================");
      await AsyncStorage.setItem("best-score", value.toString());
    } catch (e) {
      // saving error
    }
  };

  const loadBestScore = async () => {
    try {
      const value = await AsyncStorage.getItem("best-score");
      if (value !== null) {
        // value previously stored
        setBestScore(Number.parseInt(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  return <QuizContent.Provider value={value}>{children}</QuizContent.Provider>;
}

export const useQuizContext = () => useContext(QuizContent);

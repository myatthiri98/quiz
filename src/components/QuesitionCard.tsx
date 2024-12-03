import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "./types";
import Card from "./Card";
import { useState } from "react";

type QuestionCard = {
  question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const onOptionsSelected = (option: string) => {
    setSelectedOption(option);
    console.warn("Selected option: ", option);
  };

  return (
    <Card title={question.title}>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            option={option}
            isSelected={option == selectedOption}
            onPress={() => onOptionsSelected(option)}
          />
        ))}
      </View>
    </Card>
  );
}

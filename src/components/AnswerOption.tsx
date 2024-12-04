import { View, Text, StyleSheet, Pressable } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";
import { useState } from "react";

type AnswerOption = {
  option: string;
};

export default function AnswerOption({ option }: AnswerOption) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;

  return (
    <Pressable
      onPress={() => {
        setSelectedOption(option)
      }}
      style={[
        styles.container,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "#E1F396",
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderRadius: 100,
  },
});

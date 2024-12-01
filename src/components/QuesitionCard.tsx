import { View, Text, StyleSheet } from "react-native"
import AnswerOption from "./AnswerOption"
import { Question } from "./types"
import Card from "./Card"

type QuestionCard = {
  question: Question
}

export default function QuestionCard({ question }: QuestionCard) {
  const selectedOption = question.options[0]

  const onOptionsSelected = (option: string) => {
    console.warn("Selected: ", option)
  }

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
  )
}

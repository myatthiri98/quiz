import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import QuestionCard from "../components/QuestionCard";
import { FontAwesome6 } from "@expo/vector-icons";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useRef, useState } from "react";
import useTimer from "../hooks/useTimer";

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();

  const { time, startTimer, resetTimer } = useTimer(20);

  useEffect(() => {
    startTimer();
    return () => {
      resetTimer();
    };
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question {questionIndex + 1}/5</Text>
        </View>
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time} onPress={resetTimer}>
              {time}sec
            </Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>
              Correct answers: {score}/{totalQuestions}
            </Text>
            <Text>Best score: {bestScore} </Text>
          </Card>
        )}
        <CustomButton
          onPress={onNext}
          title="Next"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  page: {
    flex: 1,
    backgroundColor: "#FDFEF4",
  },
  title: {
    textAlign: "center",
    color: "#005055",
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    color: "#005055",
    fontWeight: "bold",
  },
});

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native"
import QuestionCard from "../components/QuesitionCard"
import { FontAwesome6 } from "@expo/vector-icons"
import questions from "../questions"
import Card from "../components/Card"
import CustomButton from "../components/CustomButton"

const question = questions[1]

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.time}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>Correct answers: 3/5</Text>
            <Text>Best score: 10</Text>
          </Card>
        )}
        <CustomButton
          onPress={() => console.warn("Pressed")}
          title="Next"
          rightIcon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  )
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
})

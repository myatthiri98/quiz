import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import QuestionCard from "../components/QuesitionCard";

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text>Question 1/5</Text>
        </View>

        <QuestionCard />

        <View>
          <Text>Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  page: {
    flex: 1,
  },
});

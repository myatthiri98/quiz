import { View, Text, StyleSheet } from "react-native";

export default function AnswerOption() {
  return (
    <View style={styles.container}>
      <Text>This is an answer option</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});

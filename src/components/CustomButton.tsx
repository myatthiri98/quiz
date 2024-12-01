import { ReactNode } from "react"
import { Pressable, PressableProps, StyleSheet, Text, View } from "react-native"

type CustomButton = {
  title: string
  rightIcon?: ReactNode
} & PressableProps

export default function CustomButton({
  title,
  rightIcon,
  ...pressableProps
}: CustomButton) {
  console.log(pressableProps)

  return (
    <Pressable {...pressableProps} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{rightIcon}</View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  buttonIcon: {
    position: "absolute",
    right: 10,
  },
})

import { StyleSheet, View } from "react-native";
import LessonPath from "./components/LessonPath";

export default function Index() {
  return (
    <View style={styles.container}>
      <LessonPath />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

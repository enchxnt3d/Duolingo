import { StyleSheet, Text, View } from "react-native";

function LessonButton({ style, locked }: { style: object; locked?: boolean }) {
  return (
    <View style={[styles.lessonButtonContainer, style]}>
      <View
        style={[styles.lessonShadow, locked && styles.lockedLessonShadow]}
      />

      <View style={[styles.lessonCircle, locked && styles.lockedLessonCircle]}>
        <Text style={[styles.star, locked && styles.lockedStar]}>★</Text>
      </View>
    </View>
  );
}

export default function LessonPath() {
  return (
    <View style={styles.pathContainer}>
      <LessonButton style={styles.lessonOne} />
      <LessonButton style={styles.lessonTwo} />
      <LessonButton style={styles.lessonThree} locked />
      <LessonButton style={styles.lessonFour} locked />
      <LessonButton style={styles.lessonFive} locked />
    </View>
  );
}

const styles = StyleSheet.create({
  pathContainer: {
    width: "100%",
    height: 500,
    position: "relative",
  },

  lessonButtonContainer: {
    width: 86,
    height: 94,
    position: "absolute",
  },

  lessonShadow: {
    position: "absolute",
    top: 8,
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#46A302",
  },

  lessonCircle: {
    position: "absolute",
    top: 0,
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: "#58CC02",
    alignItems: "center",
    justifyContent: "center",
  },

  star: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
  },

  lessonOne: {
    top: 20,
    left: 170,
  },

  lessonTwo: {
    top: 110,
    left: 120,
  },

  lessonThree: {
    top: 210,
    left: 90,
  },

  lessonFour: {
    top: 310,
    left: 120,
  },

  lessonFive: {
    top: 400,
    left: 170,
  },
  lockedLessonCircle: {
    backgroundColor: "#34474f",
  },

  lockedLessonShadow: {
    backgroundColor: "#293a41",
  },

  lockedStar: {
    color: "#5f737c",
  },
});

import { StyleSheet, Text, View } from "react-native";

function LessonButton({
  style,
  locked,
  chest,
}: {
  style: object;
  locked?: boolean;
  chest?: React.ReactNode;
}) {
  return (
    <View style={[styles.lessonButtonContainer, style]}>
      <View
        style={[styles.lessonShadow, locked && styles.lockedLessonShadow]}
      />

      <View style={[styles.lessonCircle, locked && styles.lockedLessonCircle]}>
        {chest ? (
          chest
        ) : (
          <Text style={[styles.star, locked && styles.lockedStar]}>★</Text>
        )}
      </View>
    </View>
  );
}

function ChestIcon() {
  return (
    <View style={iconStyles.chestWrapper}>
      <View style={iconStyles.chestLeftPost} />
      <View style={iconStyles.chestMiddle}>
        <View style={iconStyles.chestLockOuter}>
          <View style={iconStyles.chestLockInner} />
        </View>
      </View>
      <View style={iconStyles.chestRightPost} />
    </View>
  );
}

export default function LessonPath() {
  return (
    <View style={styles.pathContainer}>
      <LessonButton style={styles.lessonOne} />
      <LessonButton style={styles.lessonTwo} />
      <LessonButton style={styles.lessonThree} locked chest={<ChestIcon />} />
      <LessonButton style={styles.lessonFour} locked />
      <LessonButton style={styles.lessonFive} locked />
    </View>
  );
}

const iconStyles = StyleSheet.create({
  chestWrapper: {
    width: 38,
    height: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  chestLeftPost: {
    width: 6,
    height: 30,
    backgroundColor: "#5f737c",
    borderRadius: 2,
  },

  chestMiddle: {
    width: 22,
    height: 18,
    borderWidth: 5,
    borderColor: "#5f737c",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101f22",
  },

  chestRightPost: {
    width: 6,
    height: 30,
    backgroundColor: "#5f737c",
    borderRadius: 2,
  },

  chestLockOuter: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#5f737c",
    justifyContent: "center",
    alignItems: "center",
  },

  chestLockInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#5f737c",
  },
});

const styles = StyleSheet.create({
  pathContainer: {
    width: "100%",
    height: 520,
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

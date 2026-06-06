import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LessonPath from "./components/LessonPath";

// these are only the icons I needed to customize more
// the rest stayed as text icons so I dont overcomplicate the code

function HomeIcon() {
  return (
    <View style={iconStyles.homeWrapper}>
      <View style={iconStyles.homeRoof} />
      <View style={iconStyles.homeBody}>
        <View style={iconStyles.homeDoor} />
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

export default function HomeScreen() {
  // this controls when the under construction image shows up
  const [modalVisible, setModalVisible] = useState(false);

  // this opens the popup when someone clicks a bottom button
  function openUnderConstruction() {
    setModalVisible(true);
  }

  // this closes the popup
  function closeUnderConstruction() {
    setModalVisible(false);
  }

  // this is for the required Alert button from the assignment
  // web needs globalThis.alert because React Native Alert sometimes does nothing there
  function showAlert() {
    if (Platform.OS === "web") {
      globalThis.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  }

  return (
    <View style={styles.screen}>
      {/* this is the middle section */}
      <LessonPath />
      {/* this is the assignment alert button */}
      <Pressable style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertButtonText}>Alert</Text>
      </Pressable>

      {/* this is the bottom navigation menu */}
      <View style={styles.bottomBar}>
        <Pressable
          style={[styles.navButton, styles.activeButton]}
          onPress={openUnderConstruction}
        >
          <HomeIcon />
        </Pressable>

        <Pressable style={styles.navButton} onPress={openUnderConstruction}>
          <ChestIcon />
          <View style={styles.redDot} />
        </Pressable>

        <Pressable style={styles.navButton} onPress={openUnderConstruction}>
          <Text style={styles.trophyIcon}>♛</Text>
          <View style={styles.redDot} />
        </Pressable>

        <Pressable style={styles.navButton} onPress={openUnderConstruction}>
          <Text style={styles.heartIcon}>♥</Text>
          <View style={styles.redDot} />
        </Pressable>

        <Pressable style={styles.navButton} onPress={openUnderConstruction}>
          <Text style={styles.galaxyIcon}>✦</Text>
        </Pressable>

        <Pressable style={styles.navButton} onPress={openUnderConstruction}>
          <Text style={styles.moreIcon}>•••</Text>
          <View style={styles.redDot} />
        </Pressable>
      </View>

      {/* this works like a popup when a bottom button is clicked */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            {/* this shows the under construction image */}
            <Image
              source={require("../../assets/images/undercontruction.png")}
              style={styles.constructionImage}
              resizeMode="contain"
            />

            <Pressable
              style={styles.closeButton}
              onPress={closeUnderConstruction}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// main screen styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#101f22",
    justifyContent: "flex-end",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#8fa1a8",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },

  // this styles the Alert button so it fits the dark UI
  alertButton: {
    alignSelf: "center",
    borderWidth: 3,
    borderColor: "#34484f",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 38,
    marginBottom: 14,
    backgroundColor: "#14262a",
  },

  alertButtonText: {
    color: "#d783ff",
    fontSize: 20,
    fontWeight: "900",
  },

  // this is the bar at the bottom where all the buttons go
  bottomBar: {
    height: 105,
    backgroundColor: "#101f22",
    borderTopWidth: 2,
    borderTopColor: "#34484f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingBottom: 18,
  },

  // this is the basic style that all the bottom buttons share
  navButton: {
    width: 58,
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  // this is only for the selected home button
  activeButton: {
    borderWidth: 4,
    borderColor: "#3f91b4",
    backgroundColor: "#18323a",
  },

  trophyIcon: {
    color: "#58cc02",
    fontSize: 40,
    fontWeight: "900",
  },

  heartIcon: {
    color: "#ff7ac8",
    fontSize: 40,
    fontWeight: "900",
  },

  galaxyIcon: {
    color: "#5edbff",
    fontSize: 44,
    fontWeight: "900",
    textShadowColor: "white",
    textShadowRadius: 4,
  },

  moreIcon: {
    color: "#bd65f2",
    fontSize: 34,
    fontWeight: "900",
  },

  // this is the small red notification dot beside some buttons
  redDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#e94b4b",
    position: "absolute",
    right: 4,
    bottom: 5,
  },

  // this dark background goes behind the popup
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  // this box holds the under construction image and the close button
  modalBox: {
    width: "500%",
    backgroundColor: "#0b1d35",
    borderRadius: 20,
    padding: 112,
    alignItems: "center",
  },

  constructionImage: {
    width: "100%",
    height: 760,
    borderRadius: 16,
  },

  closeButton: {
    backgroundColor: "#58cc02",
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 14,
    marginTop: 14,
  },

  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
  },
});

// styles for the house and chest icons only
const iconStyles = StyleSheet.create({
  homeWrapper: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  homeRoof: {
    width: 24,
    height: 24,
    backgroundColor: "#ff5b57",
    position: "absolute",
    top: 2,
    transform: [{ rotate: "45deg" }],
    borderRadius: 3,
  },

  homeBody: {
    width: 22,
    height: 18,
    backgroundColor: "#ffcf2f",
    position: "absolute",
    bottom: 3,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  homeDoor: {
    width: 8,
    height: 8,
    backgroundColor: "#c67a14",
    borderRadius: 6,
    marginBottom: 2,
  },

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
    backgroundColor: "#f7c81b",
    borderRadius: 2,
  },

  chestMiddle: {
    width: 22,
    height: 18,
    borderWidth: 5,
    borderColor: "#f7c81b",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#101f22",
  },

  chestRightPost: {
    width: 6,
    height: 30,
    backgroundColor: "#f7c81b",
    borderRadius: 2,
  },

  chestLockOuter: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#f7c81b",
    justifyContent: "center",
    alignItems: "center",
  },

  chestLockInner: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#c28d08",
  },
});

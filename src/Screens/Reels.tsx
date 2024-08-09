import React from "react";
import { SafeAreaView,View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";

const Reels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.videoBackground}>
        <Image
          source={{
            uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male&female",
          }}
          width={500}
          height={1100}
        />
      </View>
      <View style={styles.videoBackground}>
        <Image
          source={{
            uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male&female",
          }}
          width={500}
          height={1100}
        />
      </View>
      <View style={styles.overlayUI}>
        <View style={styles.userContainer}></View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Hello This is my first reel on the platform
          </Text>
          <Text style={styles.music}>♫ Music Title</Text>
        </View>
        <View style={styles.socialContainer}>
          <View style={styles.socialIcon}>
            <Icon name="heart" type="ionicon" size={30} color="red" />
            <Text style={{ color: "white" }}>123k</Text>
          </View>
          <View style={styles.socialIcon}>
            <Icon
              name="chatbubble-outline"
              type="ionicon"
              size={30}
              color="white"
            />
            <Text style={{ color: "white" }}>456</Text>
          </View>
          <View style={styles.socialIcon}>
            <Icon
              name="paper-plane-outline"
              type="ionicon"
              size={30}
              color="white"
            />
            <Text style={{ color: "white" }}>789</Text>
          </View>
          <Image
            style={styles.musicDisk}
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayUI: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  userContainer: {
    alignSelf: "flex-start",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  username: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  followButton: {
    backgroundColor: "#ff0055",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  followButtonText: {
    color: "white",
  },
  descriptionContainer: {
    alignSelf: "flex-start",
  },
  description: {
    color: "white",
    marginBottom: 5,
  },
  music: {
    color: "white",
  },
  socialContainer: {
    position: "absolute",
    right: 20,
    top: "60%",
  },
  socialIcon: {
    alignItems: "center",
    marginBottom: 15,
  },
  musicDisk: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Reels;

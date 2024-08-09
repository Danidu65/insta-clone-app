import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&male&male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&male&male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female&male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&male&male&male&male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female&male&male&male&male",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&male&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female&female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female&female&female&female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female&female&female&female&female&female&female&female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=female&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
          {Array(1)
          .fill(0)
          .map((_, index) => (
            <Image
              key={index}
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=male&female",
              }}
              style={styles.gridItem}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d3d3d3",
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#f1f1f1",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  gridItem: {
    width: "33.33%",
    height: 120,
  },
});

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    user: "toxic",
    image:
     "https://xsgames.co/randomusers/avatar.php?g=male&male",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "2",
    user: "zintax",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=male",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "ishan",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=female&female",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "sonu",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=female",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "sonu",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=male",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "sonu",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=female&male",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "sonu",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=male&female",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
  {
    id: "3",
    user: "sonu",
    image:
    "https://xsgames.co/randomusers/avatar.php?g=female",
    likes: "44,686",
    caption: "The game in Japan was amazing and I want to share some photos",
  },
];

const InstagramFeed = ({navigation}) => {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri:     "https://xsgames.co/randomusers/avatar.php?g=male&female&male",

          }}
          style={styles.userAvatar}
        />
        <Text>{item.user}</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </View>
      <Image source={{ uri: item.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.interactionIcons}>
          <Ionicons
            name="heart-outline"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color="black"
            style={styles.iconSpacing}
          />
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </View>
        <Text>Liked by craig_love and {item.likes} others</Text>
        <Text>
          {item.user} | {item.caption}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.iconsTop}>
          <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
            <Ionicons
              style={{ right: 10 }}
              name="heart-outline"
              size={28}
              color="black"
            />
          </TouchableOpacity>
          <AntDesign name="message1" size={24} color="black" />
        </View>
      </View>

      <View style={styles.storiesContainer}>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Image
              source={{
                uri:     "https://xsgames.co/randomusers/avatar.php?g=female&female&male&male",

              }}
              style={styles.story}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <FlatList
        data={data}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        style={styles.postsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  storiesContainer: {
    flexDirection: "row",
    padding: 10,
  },
  story: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 5,
    borderColor: "gray",
    borderWidth: 2,
  },
  postsList: {
    flex: 1,
  },
  post: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postFooter: {
    padding: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  bottomAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  interactionIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconSpacing: {
    marginRight: 10,
  },
  iconsTop:{
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  
  }
});

export default InstagramFeed;

import React from "react";
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import { Icon, ListItem, Avatar, Button } from "react-native-elements";

export default function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Icon name="arrow-left" type="font-awesome" color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <Icon name="filter" type="font-awesome" color="#000" />
      </View>

      <ScrollView>
        <Text style={styles.sectionHeader}>Priority</Text>

        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=male",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=female&male",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:    "https://xsgames.co/randomusers/avatar.php?g=male&female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>Ishan_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>

        <Text style={styles.sectionHeader}>Today</Text>

        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male&female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=male",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male&female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri:     "https://xsgames.co/randomusers/avatar.php?g=female&male&female",

            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              Ishan, Dasun and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
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
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "gray",
  },
});

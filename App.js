import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "nate", key: 1 },
    { name: "eliza", key: 2 },
    { name: "eliza", key: 3 },
  ]);

  const pressHandler = (id) => {
    setPeople(people.filter((person) => person.key !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={{ marginTop: 100 }}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text
              style={{
                marginHorizontal: 10,
                marginTop: 24,
                fontSize: 25,
                width: 100,
                height: 50,
                textAlign: "center",
                backgroundColor: "gray",
                color: "white",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
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

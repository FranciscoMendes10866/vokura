import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TaskDTO = {
  title: string;
  handleDestroy(task: string): any;
};

const task = ({ title, handleDestroy }: TaskDTO) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <MaterialCommunityIcons name="cookie" size={24} color="#edf2f6" />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDestroy(title)}>
        <View style={styles.iconWrapper}>
          <Entypo name="check" size={18} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#494953",
    borderWidth: 1.5,
    borderColor: "whitesmoke",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
    color: "white",
    marginLeft: 15,
  },
  iconWrapper: {
    padding: 12,
    backgroundColor: "#8fd9a8",
    shadowOpacity: 0.6,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default task;

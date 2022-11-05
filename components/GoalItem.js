import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#311b6b" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.ppressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: "#000",
    padding: 8,
  },
});

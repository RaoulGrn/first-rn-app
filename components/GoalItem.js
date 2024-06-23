import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    borderColor: "#123524",
    borderWidth: 0.5,
    borderRadius: 6,
    backgroundColor: "#66a495",
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    padding: 8,
    color: "#0c0c0c",
    fontSize: 18,
  },
});

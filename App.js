import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [unit, setUnit] = useState("default1");

  const calculate = () => {
    switch (unit) {
      case "meters":
        setResult(value * 3.28084);
        break;
      case "default!":
        setResult(value * 0);
        break;
      case "feet":
        setResult(value / 3.28084);
        break;
      // add more cases for other units
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textArea}
        placeholder="Çevirmek istediğiniz değeri giriniz"
        value={value}
        onChangeText={(val) => setValue(val)}
      />
      <View style={styles.bottomArea}>
        <Picker
          selectedValue={unit}
          onValueChange={(val) => setUnit(val)}
          style={styles.pickerArea}
        >
          <Picker.Item label="Seçiniz" value="default1" />
          <Picker.Item label="Meters" value="meters" />
          <Picker.Item label="Feet" value="feet" />
        </Picker>
        <View style={styles.buttonArea}>
          <Button title="Calculate" onPress={calculate} />
        </View>
      </View>
      <View style={styles.resultArea}>
        <Text style={styles.textSty}>Sonuç = {result}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    height: 50,
    paddingLeft: 10,
  },
  pickerArea: {
    width: "40%",
    flex: 1,
  },
  buttonArea: {
    marginTop: 8,
    flex: 1,
  },
  bottomArea: {
    flexDirection: "row",
    marginTop: 15,
    width: "80%",
  },
  resultArea: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  textSty: {
    borderBottomWidth: 1,
    fontSize: 19,
  },
});

export default App;

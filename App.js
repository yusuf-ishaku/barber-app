import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View style={styles.container}>
      <View style={{flex:1, width: width, height: height, ...styles.div}}>
        <Text>BlueBlack</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 22,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: 'black'

  },
  div:{
    flex: 1,
    backgroundColor: 'red'
  }
});

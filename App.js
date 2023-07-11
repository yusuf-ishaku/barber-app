// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, StatusBar, ImageBackground, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
export default function App() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("window").height;
  // const image = { uri: "https://live.staticflickr.com/65535/53035077514_7b20a9bc61_m.jpg"}
  return (
    <View style={styles.container} className={`w-[${width}] h-[${height}]`}>
       {/* <StatusBar barStyle="light-content" backgroundColor="transparent" /> */}
       <ImageBackground source={require('./assets/images/haircut.jpg')} style={{...styles.container}} resizeMode="cover" imageStyle={{opacity: 0.4}} className={"bg-gray-800 pt-60 flex-1 items-center"}>
        <Image
          source={require('./assets/adaptive-icon.png')}
          className={'w-32'}
        />
        <View className={"w-auto flex items-center text-center"}>
          <Text className={"text-3xl text-white"}>
            Let's beautify you!
          </Text>
          <Text className={"w-auto text-center text-lg text-white"}>
            We specialize in haircut, hairlock, tattoo, manicure, pedicure and ear piercing.
          </Text>
        </View>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // marginTop: 28,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // backgroundColor: 'black'

  },
  div:{
    flex: 1,
    backgroundColor: 'red'
  }
});

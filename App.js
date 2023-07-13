// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, StatusBar, ImageBackground, Image, Button, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import AppLoading from 'expo-app-loading';
import { useFonts,  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold, } from '@expo-google-fonts/manrope';
export default function App() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("window").height;
  // const image = { uri: "https://live.staticflickr.com/65535/53035077514_7b20a9bc61_m.jpg"}
    let [fontsLoaded] = useFonts({
      Manrope_200ExtraLight,
      Manrope_300Light,
      Manrope_400Regular,
      Manrope_500Medium,
      Manrope_600SemiBold,
      Manrope_700Bold,
      Manrope_800ExtraBold,
});
    if(!fontsLoaded){
      return <AppLoading/>
    }else{
      return (
          <View style={styles.container} className={`w-[${width}] h-[${height}]`}>
        {/* <StatusBar barStyle="light-content" backgroundColor="transparent" /> */}
        <ImageBackground source={require('./assets/images/haircut.jpg')} 
        style={{...styles.container}} 
        resizeMode="cover" imageStyle={{opacity: 0.4}} className={"bg-gray-800 pt-40 flex-1 items-center"}>
          <Image
            source={require('./assets/adaptive-icon.png')}
            className={'w-32'}
          />
          <View className={"w-auto flex items-center text-center"}>
            <Text className={"text-4xl text-white mt-8"} style={{fontFamily: "Manrope_700Bold"}}>
              Let's beautify you!
            </Text>
            <Text className={"text-center text-lg text-white "} style={{fontFamily: "Manrope_400Regular", width: width*0.91}}>
              We specialize in haircut, hairlock, tattoo, manicure, pedicure and ear piercing
            </Text>
          </View>
          <View className={"flex-1 flex-row justify-center mt-16"} style={{width: width*0.5}}>
              <View className={"rounded-full bg-white mr-2"} style={{width: 20, height: 20,}}>

              </View>
              <View className={"rounded-full border-[1px] border-white mr-2"} style={{width: 20, height: 20,}}>

              </View>
              <View className={"rounded-full border-[1px] border-white mr-2"} style={{width: 20, height: 20,}}>

              </View>
          </View>
          <View style={{flex:1, justifyContent: "space-between", flexDirection: "row", width: width*0.8, paddingInline: 10}}>
            <Pressable style={{flex: 4, height: height*0.07, alignItems: 'center', justifyContent: "center", marginRight: 8}} className={"rounded-xl text-white border-[1px] border-white bg-transparent"}>
              <Text className={"text-white"}>Skip</Text>
            </Pressable>
            <Pressable style={{flex: 4, height: height*0.07, alignItems: 'center', justifyContent: "center", backgroundColor: "green"}} className={"bg-green text-white rounded-xl border-white bg-transparent"}>
              <Text className={"text-white"}>Next</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
      )
    }
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

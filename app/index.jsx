import { Text, View, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants';
import CustomButton from "../components/CustomButton";
//* when using routing in React Native, in your folder you MUST have '_layout' 
//* and if route to any file in that folder, it will bring automatically to '_layout' file
const Welcome = () => {
  return (
       <SafeAreaView className="bg-primary h-full">
        <ScrollView 
          contentContainerStyle={{
            height: "100%",
          }}
        >
          <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
            <Image
             source={images.logo}
             className="w-[230px] h-[84px]" 
             resizeMode="contain"
            />
            <Image
             source={images.cards}
             className="max-w-[380px] w-full h-[300px]"
             resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">Zendra</Text>
            </Text>
            <Image
            source={images.path}
            className="absolute -bottom-2 -right-4 w-[136px] h-[15px]"
            resizeMode="contain"
            />
          </View>
          <Text className="text-lg font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Zendra
          </Text>
            <CustomButton
              title="Continue with Email"
              handlePress={()=> router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style='light'/>
      </SafeAreaView>
  );
}
export default Welcome;



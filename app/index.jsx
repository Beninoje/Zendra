import { Text, View } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';

//* when using routing in React Native, in your folder you MUST have '_layout' 
//* and if route to any file in that folder, it will bring automatically to '_layout' file
export default function Page() {
  
  return (
       <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">Zendra</Text>

        <Link href="/home" className="text-blue-500 text-lg"> Go to Home</Link>
      </View>
  );
}



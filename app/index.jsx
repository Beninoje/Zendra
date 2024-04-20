import { Text, View } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';


export default function Page() {
  
  return (
       <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">Zendra</Text>
        <Link href="/profile" className="text-blue-500 text-lg"> Go to Profile</Link>
      </View>
  );
}



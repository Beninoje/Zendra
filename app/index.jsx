import { Text, View } from "react-native";
import { Link } from 'expo-router'

export default function Page() {
  return (
       <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl">Hello World</Text>
        <Link href="/profile" className="text-blue-500 text-lg"> Go to Profile</Link>
      </View>
  );
}



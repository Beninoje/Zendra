import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[200px] h-[60px]"
          />
          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign In
          </Text>
          <FormField
            title="Email"
            value={form.email}
            //* Call back function that accepts the event and calls setForm setter 
            //* where we DESTRUCTER the existing form values then modify the email to equal to the event
            handleChangeText={(e) => setForm({
              ...form,
              email: e
            })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            //* Call back function that accepts the event and calls setForm setter 
            //* where we DESTRUCTER the existing form values then modify the email to equal to the event
            handleChangeText={(e) => setForm({
              ...form,
              password: e
            })}
            otherStyles="mt-7"
          />
          
          <CustomButton
           title="Sign In"
           containerStyles="mt-7"
           handlePress={submit}
           isLoading={isSubmitting}
          />
          <View className="flex items-center justify-center w-full mt-7">
            <Text className="text-white">Don't have an account? {''}
              <Link href="/sign-up" className="text-[17px] font-psemibold text-secondary-200">Sign Up</Link>
            </Text>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
import { SafeAreaView, StatusBar, View } from 'react-native';
import { LoginForm } from '../components';

export default function IndexScreen() {
  return (
    <>
      <StatusBar className="bg-white px-4 py-12 dark:bg-gray-900"/>
      <SafeAreaView className="flex-1 justify-center">
        <View className="flex-1 items-center justify-center  bg-white px-4 py-12 dark:bg-gray-900">
          <LoginForm/>
        </View>
      </SafeAreaView>
    </>
  );
}

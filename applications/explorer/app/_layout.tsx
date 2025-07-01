import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <Stack screenOptions={{
      title: 'Foobar',
      headerShown: false
    }}>
      <Stack.Screen name="index" options={{
        animation: 'fade'
      }}/>
    </Stack>
  );
}
import { useState } from 'react';
import { Alert, TextInput, View } from 'react-native';
import Logo from '../../assets/favicon.svg';
import { Button, Label, Link, VStack } from '../../elements';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Signing in...', `Username: ${username}`);
  };

  return (
    <VStack className="w-full">
      <View className="w-full self-center px-6 gap-6">
        <View className="items-center">
          <Logo height={80} width={80}/>
        </View>

        <View className="flex gap-4">
          <View>
            <TextInput
              className="block w-full h-16 text-xl rounded-t-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Username"
              keyboardType="email-address"
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              className="block w-full h-16 text-xl rounded-b-md border border-t-0 border-gray-300 bg-white px-3 py-2 text-gray-900 text-gray-900 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>

        <Button onPress={handleSubmit}>
          Sign in
        </Button>

        <VStack align="start">
          <Label>
            Can't sign in?
          </Label>
          <Link href="#">
            Reset your password
          </Link>
        </VStack>

        <VStack align="start">
          <Label>
            Not signed up?
          </Label>
          <Link href="#">
            Sign up for a new account
          </Link>
        </VStack>
      </View>
    </VStack>
  );
}

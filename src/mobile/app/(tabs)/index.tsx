import { View, Text } from 'react-native';
import { verifyInstallation } from 'nativewind';

export default function TestTailwind() {
  verifyInstallation();

  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-2xl font-bold">
        ✅ Tailwind is ALIVE
      </Text>
    </View>
  );
}
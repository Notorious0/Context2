import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View} from 'react-native';
import { Foo } from './Foo';
import { NameContextProvider } from './NameContext';
import { Bar } from './Bar';

export default function App() {
  return (
    <NameContextProvider>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Foo />
      <Bar />
    </View>
    </NameContextProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! Welcome to my app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;

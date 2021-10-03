import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Theme } from 'react-native-paper/src/types';
import { CardView } from './src/components';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
};

const trip1 = {
  title: 'welcome to typescript',
  description: '',
  imageUri: null,
};

const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <CardView {...trip1}/>
      </View>
    </PaperProvider>
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

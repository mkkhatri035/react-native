import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';
import RNFS from 'react-native-fs';
function App() {
  const filePath = RNFS.DocumentDirectoryPath + '/joke.txt';

  const [fileData, setFileData] = useState();
  const readFile = async (path) => {
    const response = await RNFS.readFile(path);
    setFileData(response);
  };
  useEffect(() => {
    readFile(filePath);
    //deleteFile(filePath);
    //deleteFile(folderPath);
  }, []);
  return (
    <SafeAreaView>
      <Text> {fileData}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    fontSize: 30,
  },
  name: {
    fontSize: 20,
  },
  file: {
    fontSize: 18,
  },
});

export default App;

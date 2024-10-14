// components/Page.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import Word from './translation/word.json';
import Translate from './translation/translation.json';
import PageStyles from './components/styles';
import Svg, { Path } from 'react-native-svg';

const languageOptions = [
  { label: 'Central Thai', value: 'ce-TH' },
  { label: 'Northeastern Thai', value: 'ne-TH' },
  { label: 'Southern Thai', value: 'so-TH' },
  { label: 'Northern Thai', value: 'no-TH' },
];

const Page = () => {
  const [textToRead, setTextToRead] = useState('');
  const [replicatedText, setReplicatedText] = useState('');
  const [fromText, setformText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  let [selectedLanguage] = useState('ce-TH');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handlePress = async () => {
    if (replicatedText) {
      try {
        await Speech.speak(replicatedText, { language: 'th' });
      } catch (error) {
        console.error('Error while attempting to speak:', error);
      }
    }
  };

  const handlePressFrom = async () => {
    if (fromText) {
      try {
        await Speech.speak(fromText, { language: 'th' });
      } catch (error) {
        console.error('Error while attempting to speak:', error);
      }
    }
  };

  const handleTextChange = (text) => {
    setTextToRead(text);
    setReplicatedText(text);
  };

  const handleTextChangeFrom = (text) => {
     setTextToRead(text);
    setformText(text);
  };

  const handleLanguageChange = (language) => {
    selectedLanguage = language;
    toggleModal(); // Close the modal after selecting a language
    handleJsonTool();
  };

  // Function to handle JSON tool feature
  const handleJsonTool = () => {
    if (textToRead) {
      const englishWord = Word[textToRead] || '';
      const translatedWord =
        Translate[englishWord]?.[selectedLanguage] || 'BHUTIDOESNTUNDERSTAND';
      setReplicatedText(translatedWord);
      setformText(englishWord)
      Keyboard.dismiss(); // Close the keyboard after setting the replicated text
    }
  };

  return (
    <TouchableWithoutFeedback>
        <SafeAreaView>
          <View style={styles.navbarbg}>
            <View style={styles.actionRow}>
              <Text>DTranslation</Text>

              <FontAwesome name="th-list" size={24} color="black" />
            </View>
          </View>

          <View style={PageStyles.container}>
            <View style={PageStyles.tb1}>
              <View style={styles.horizontalContainerLeft}>
                <TouchableOpacity style={styles.item} onPress={handlePress}>
                  <AntDesign name="sound" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Feather name="copy" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <TextInput
                style={PageStyles.input}
                placeholder="Enter Thai word"
                placeholderTextColor="#3E1616"
                value={textToRead}
                onChangeText={handleTextChange}
              />
            </View>

            {/* Replicated text box */}

            <View style={PageStyles.tb2}>
              <View style={styles.horizontalContainerRight}>
                <TouchableOpacity style={styles.item} onPress={handlePress}>
                  <AntDesign name="sound" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Feather name="copy" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <TextInput
                style={PageStyles.inputRight}
                placeholder="Replicated Text"
                placeholderTextColor="#3E1616"
                value={replicatedText}
                editable={false}
              />
            </View>

            {/* Language selection modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Select Region</Text>
                {languageOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={styles.modalButton}
                    onPress={() => handleLanguageChange(option.value)}>
                    <Text>{option.label}</Text>
                  </TouchableOpacity>
                ))}

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={toggleModal}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            {/* Open modal button */}
            <TouchableOpacity
              style={styles.openModalButton}
              onPress={toggleModal}>
              <Text>Select Language</Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  cancelButton: {
    color: 'red',
  },
  openModalButton: {
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  horizontalContainerLeft: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'left',
  },
  horizontalContainerRight: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'right',
  },
  navbarbg: {
    height: 50,
    backgroundColor: '#2196F3',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 24,
    fontWeight: 'bold',
  },
  item: {
    margin: -1, // Reduce the margin to make items closer
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: 'transparent', // Set background color to transparent
  },
});

export default Page;

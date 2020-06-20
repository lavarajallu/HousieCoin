/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './colors'


const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState('[]')
  const [houseValue, setHouseValue] = useState('0')
  const coinsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
    , '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '74', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90']

  const generateRandom = () => {
    var min = 1;
    var max = 90;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  }
  const restartGame = async () => {
    //  setHouseValue[generateRandom()]
    // await generateRandom();
    Alert.alert('Housey Coins', 'Are you sure you want to restart this game?')
    // alert('restart button: ' + generateRandom())
  }
  const startAction = () => {
    alert('restart button: ' + generateRandom())
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#005bea" />
      <SafeAreaView>
        <View style={{ height: 65, justifyContent: 'center', alignContent: 'center' }}>
          <LinearGradient colors={['#00c6fb', "#005bea"]} style={{ height: 65, justifyContent: 'center', alignContent: 'center' }}>
            <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Housie / Tambola</Text>
          </LinearGradient>
        </View>
        <View style={{ height: 'auto', marginHorizontal: 5, marginVertical: 10, marginTop: 20 }}>
          <FlatList
            data={coinsArray}
            renderItem={({ item }) => (
              <View style={styles.numberRowBox}>
                <View style={styles.circleBox}>
                  <LinearGradient colors={["green", "green"]} style={styles.circleBox}>
                    <Text style={styles.circleText}>{item}</Text>
                  </LinearGradient>
                </View>
              </View>
            )}
            //Setting the number of column
            numColumns={9}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
      <View style={styles.bottomButtonsRow}>
        <TouchableOpacity style={{ flex: 0.28 }} onPress={() => { restartGame() }}>
          <LinearGradient colors={['#00c6fb', "#005bea"]} style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Restart</Text>
          </LinearGradient>
        </TouchableOpacity>

        <LinearGradient colors={['blue', 'blue']} style={[styles.bottomButton, { flex: 0.30 }]}>
          <Text style={[styles.bottomButtonText, { fontSize: 20 }]}>{houseValue}</Text>
        </LinearGradient>

        <TouchableOpacity style={{ flex: 0.28 }} onPress={() => { startAction() }}>
          <LinearGradient colors={['#00c6fb', "#005bea"]} style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Start</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomButtonText: { fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'white' },
  bottomButtonsRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 },
  bottomButton: { height: 45, justifyContent: 'center', alignContent: 'center', borderRadius: 8 },
  numberRowBox: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', paddingHorizontal: 5, paddingVertical: 5 },
  circleText: { textAlign: 'center', fontWeight: 'bold', fontSize: 14, color: 'white' },
  circleBox: { height: 35, width: 35, borderRadius: 17.5, backgroundColor: 'green', justifyContent: 'center', alignContent: 'center' }
});

export default App;

import React, {useState} from 'react';
import {
  StyleSheet,
  SectionList,
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import bckImage from './ExperimentsAssets/bckImage.png';
import Intersect from './ExperimentsAssets/Intersect.png';
import Intersect2 from './ExperimentsAssets/intersect2.png';
import experimentsText from './ExperimentsAssets/expText.png';
import arrowDown from './ExperimentsAssets/arrowDown.png';
import arrowUp from './ExperimentsAssets/arrowUp.png';

const DATA = [
  {
    title: 'Assigned',
    data: [
      {
        expNo: 5,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: false,
      },
    ],
  },
  {
    title: 'Completed',
    data: [
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: true,
      },
      {
        expNo: 4,
        expHeading: 'Mag Field',
        dueDate: "19 Apr'21 23:59",
        isComplete: true,
      },
    ],
  },
];

const Item = ({item}) => (
  <View style={styles.item}>
    <Text style={styles.expNo}>Experiment {item.expNo}</Text>
    <Text style={styles.expHeading}>{item.expHeading}</Text>
    <Image
      style={{top: 10, left: 0, alignSelf: 'flex-start'}}
      source={Intersect}
    />
    <Image style={{top: -55, alignSelf: 'flex-end'}} source={Intersect2} />
    <Text style={item.isComplete ? styles.dueDate : styles.dueDateOrange}>
      {item.dueDate}
    </Text>
  </View>
);

export default function Experiments({navigation}) {
  const [isAssignedOpen, onChangeAssignedOpen] = React.useState(true);
  const [isCompletedOpen, onChangeCompletedOpen] = React.useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={bckImage} style={styles.imageBackground}>
        <View style={{width: '100%'}}>
          <Image
            style={{marginBottom: 37, marginTop: 49, alignSelf: 'center'}}
            source={experimentsText}
          />
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => {
              return item.isComplete ? (
                isCompletedOpen ? (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ExperimentDetail')}>
                    <Item item={item} />
                  </TouchableOpacity>
                ) : null
              ) : isAssignedOpen ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ExperimentDetail')}>
                  <Item item={item} />
                </TouchableOpacity>
              ) : null;
            }}
            renderSectionHeader={({section: {title}}) => {
              const imgsrc =
                title === 'Assigned'
                  ? isAssignedOpen
                    ? arrowUp
                    : arrowDown
                  : isCompletedOpen
                  ? arrowUp
                  : arrowDown;
              return (
                <View>
                  <TouchableOpacity
                    style={styles.headericon}
                    onPress={() => {
                      title === 'Assigned'
                        ? onChangeAssignedOpen(!isAssignedOpen)
                        : onChangeCompletedOpen(!isCompletedOpen);
                    }}>
                    <Image style={{top: 8}} source={imgsrc} />
                  </TouchableOpacity>
                  <Text style={styles.headertext}>{title}</Text>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#272B2E',
  },
  headericon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 25,
    bottom: 5,
    height: 60,
    width: 30,
  },
  headertext: {
    color: '#8e8e8e',
    fontSize: 12,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 26,
    textAlignVertical: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  item: {
    height: 90,
    margin: 6,
    backgroundColor: '#1E2326',
    borderRadius: 9,
    marginVertical: 4,
  },
  expNo: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    position: 'absolute',
    top: 12,
    left: 50,
  },
  expHeading: {
    color: '#CFCFCF',
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    position: 'absolute',
    top: 34,
    left: 50,
  },
  dueDateOrange: {
    top: -80,
    color: '#F27A27',
    paddingRight: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  dueDate: {
    top: -80,
    color: '#A1A1A1',
    paddingRight: 12,
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
  submissions: {
    paddingTop: 15,
    color: '#c1c1c1',
    fontSize: 11,
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  addBtn: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#f37a27',
    borderRadius: 40,
    padding: 16,
    right: 20,
  },
  PopupContainer: {
    width: '90%',
    marginLeft: '5%',
    height: 540,
    zIndex: 11,
    position: 'absolute',
    top: 148,
    backgroundColor: '#3C3C3C',
    alignItems: 'center',
  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: 20,
    marginRight: 18,
  },

  Scrollstyle: {
    height: 100,
    width: '100%',
    marginTop: 10,

    marginBottom: 10,
  },
  ScrollElement: {fontSize: 14, color: '#fff', fontWeight: '700'},

  Textinput: {
    marginTop: 20,
    marginBottom: 20,
    color: '#9C9C9C',
    backgroundColor: '#272B2E',
    textAlign: 'center',
    width: 300,
    height: 40,
    borderRadius: 10,
  },
  buttonText: {color: '#fff', fontSize: 15, fontWeight: 'bold'},
  AddButton: {
    backgroundColor: '#F37A27',
    height: 31,
    width: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButton: {
    backgroundColor: '#3C3C3C',
    borderColor: '#F37A27',
    borderWidth: 2,
    height: 31,
    width: 80,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  crossimage: {position: 'absolute', right: 10, top: 10},

  pickercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
  },
});

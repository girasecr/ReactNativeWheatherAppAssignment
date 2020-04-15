import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ProfileScreen extends Component {

 state = {
    avatarSource: null,
  };

   onClickListener = (viewId) => {
      this.selectPhotoTapped()
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View>
          <View style={styles.header}></View>
         {this.state.avatarSource === null ? (
              <Image style={styles.avatar} source={require('../imgs/avatar.png')}/>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
         <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Chetan Girase</Text>
              <Text style={styles.info}>Mobile developer</Text>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onClickListener('Change Profile')}>
                <Text>Change Profile</Text>
              </TouchableOpacity>
            </View>
        </View>
         <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Swipe to open menus>></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  buttonContainer: {
    marginTop:100,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    position: 'absolute',
    top:30,
  },
   textStyle: {
     left:20,
     color: '#fff',
     fontSize: 18,
   },
});

ProfileScreen.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          source={require('../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

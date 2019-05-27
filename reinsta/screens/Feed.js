import React from "react";
import {
  SafeAreaView,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { TabRouter } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";

export default class Feed extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      photo_feed: [0, 1, 2, 3, 4],
      refresh: false
    };
  }

  loadNew = () => {
    this.setState({
      refresh: true
    });
    this.setState({
      photo_feed: [5, 6, 7, 8, 9],
      refresh: false
    });
  };

  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Feed</Text>
        </View>

        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photo_feed}
          keyExtractor={(item, index) => index.toString()}
          style={{ flex: 1, backgroundColor: "#eee" }}
          renderItem={({ item, index }) => (
            // items to render
            <View style={styles.containerPost} key={index}>
              <View style={styles.postHead}>
                <Text>@name</Text>
                <Text>timing</Text>
              </View>
              <View style={styles.postImage}>
                <Image
                  source={{
                    uri:
                      "https://source.unsplash.com/random/500x" +
                      Math.floor(Math.random() * 800 + 500)
                  }}
                  style={{ width: "100%", height: 275, resizeMode: "cover" }}
                />
              </View>
              <View style={styles.postFeet}>
                <Text>description</Text>
                <Text style={{marginTop: 4, textAlign: 'center',}}>commants</Text>
              </View>
            </View>

          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  // header:
  header: {
    height: 40,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    // marginBottom: 13
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500"
  },
  // end header

  // post
  containerPost: {
    marginTop: 10,
    marginBottom: 10,
  },
  postHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingBottom: 5
  },
  postFeet: {
    paddingHorizontal: 5,
  }
  // end post
});

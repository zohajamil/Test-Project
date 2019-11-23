import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Linking } from 'react-native';
import { Text, Card } from 'react-native-elements';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    const flightDetail = JSON.parse(navigation.getParam('flightDetail', 'No flight found'));
    //console.log(flightDetail);

    return (
      
      <ScrollView>
        {
        <Card style={styles.container}>
          {
            <View style={styles.subContainer}>
              
              {flightDetail.flight_number && 
                  <Text>{flightDetail.flight_number} : {flightDetail.mission_name} - {flightDetail.launch_year}</Text>
              }

              {flightDetail.rocket &&
                <Text>{flightDetail.rocket.rocket_name} ({flightDetail.rocket.rocket_type})</Text>
              }

              {flightDetail.launch_site &&
                <Text>{flightDetail.launch_site.site_name}</Text>
              }
                
              {flightDetail.launch_success  &&
                <Text>Launch Success: Successful</Text>
              }
              

              {flightDetail.links.mission_patch_small &&
                <Image
                  style={{width: 50, height: 50}}
                  source={{uri: flightDetail.links.mission_patch_small}}/>
                
              } 

              {flightDetail.links.article_link &&
                    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(flightDetail.links.article_link)}>  Article Link </Text>
              }
            </View>
          }
        </Card>
      }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  }
})

export default DetailsScreen;
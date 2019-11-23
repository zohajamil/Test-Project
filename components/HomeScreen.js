import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, Text, View  } from 'react-native';
import { ListItem } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.spacexdata.com/v3/launches?limit='+itemsToDisplay)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <ScrollView style={styles.container}>
        {
          
            this.state.dataSource.map((item, i) => (
              
              <ListItem
              
                key={i}
                title={item.flight_number}
                leftIcon={{name: 'fighter-jet', type: 'font-awesome'}}
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    flightDetail: `${JSON.stringify(item)}`,
                  });
                }}
              />
            ))

            // <View>
            // <ImageButton
            //   style={styles.bottom}
            //   title={strings.onboarding.welcome.button} />
            // </View>
          }
        
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    flex: 1,
    padding: 20,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})

var itemsToDisplay=10;
export default HomeScreen;
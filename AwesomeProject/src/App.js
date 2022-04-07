import React from 'react';"7.2K (gzipped:2.9K)"
import{View,Text,StyleSheet,TextInput,FlatList,} from 'react-native';
import { HORIZONTAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';


function App(){
return(

<View style={styles.container}>
<Text style={styles.container_text}>PATIKASTORE</Text>
<View style={styles.veri_ınput}>
<TextInput style={styles.search}  placeholder='   Ara..'/></View>
<FlatList 
data={news_data}
numColumns={2}
columnWrapperStyle={{justifyContent:'space-between'}}
renderItem={({item }) => <NewsCard veri={item}  />   }

/>

</View>

);
};

const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"white",},
    container_text:{
        marginLeft:15,
        marginTop:15,
        fontSize:45,
        fontWeight:'bold',
        color:"purple",
    },
    search:{
        backgroundColor:'#dddddd',
        padding:15,
        borderRadius:15,
        fontSize:20,
        
    },
    veri_ınput:{
        margin:7,
    }


}
);

export default App;
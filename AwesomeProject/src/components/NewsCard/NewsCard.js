import React from 'react'; "7.2K(gzipped:2.9K)";
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';


const News=({veri})=>{
    const {title, imgURL, price, inStock, id} =veri;
    return(
        <View style={styles.container}>
            <Image style={styles.image} source= {{uri:veri.imgURL}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.instock}>{inStock}
              { !inStock &&   <Text style={styles.instock}>STOKTA YOK</Text>}
            </Text>
        </View>
        
        );
};
export default News;
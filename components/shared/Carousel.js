import React from "react";
import { FlatList } from "react-native";
import { sizes,spacing } from "../../constants/theme";

const CARD_WIDTH = sizes.width - 80;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;


const Carousel = ({renderItem,items = []}) =>{
 return (
 <FlatList
      data={items}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id} // ที่เซ็ตidรูป
      renderItem={({item, index}) => {
        if(renderItem){
          return renderItem({item,index,style:{
            width:CARD_WIDTH,
            marginLeft: spacing.l,
            marginRight: index === items.length - 1 ? spacing.l : 0, // ช่องว่างรูป
          },
        });
        }
        return null;
      }} 
    />
 );
};

export default Carousel;
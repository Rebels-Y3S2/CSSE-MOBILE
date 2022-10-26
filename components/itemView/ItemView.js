import { Button } from "@react-native-material/core";
import { useState } from "react";
import { View, Text } from "react-native";
import { getAvailableAmount, getPriceInRupees } from "../../utils/common";
import { ACCEPTED, NOT_ACCEPTED } from "../../utils/constants";

export default function ItemView(props) {
    const { item } = props;
    
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>
                Ref No. - {item.referenceNo}
            </Text>
            <Text style={styles.itemDetails}>
                {/* {getPriceInRupees(item.totalAmount)} */}
                Status - {item.isAccepted === 0? NOT_ACCEPTED : ACCEPTED}
                {item.isAccepted === 0?
                    <Text style={{fontSize: 35, color: 'red', textAlign: 'right'}}>&#8226;</Text> :
                    <Text style={{fontSize: 35, color: '#3fc18c', textAlign: 'right'}}>&#8226;</Text>
                }
            </Text>
        </View>
    )
}
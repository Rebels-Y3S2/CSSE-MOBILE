import { Button } from "@react-native-material/core";
import { useState } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { getAvailableAmount, getPriceInRupees } from "../../utils/common";
import { ACCEPTED, NOT_ACCEPTED } from "../../utils/constants";
import { Status } from "../../utils/status";
import moment from 'moment'

export default function ItemView(props) {
    const { item } = props;
    
    return (
        <View style={styles.itemContainer}>
            <View>

            </View>
            <Text style={styles.itemName}>
                Reference No. - {item.referenceNo}
            </Text>
            <Text style={styles.itemDetails}>
                Status - {Status.find(({value}) => 
                    value === item?.orderStatus)?.displayText? Status.find(({value}) => value === item?.orderStatus)?.displayText : "-"
                }
                <Text style={{fontSize: 35, color: Status.find(({value}) => 
                    value === item?.orderStatus)?.color
                , textAlign: 'right'}}>&#8226;</Text>
            </Text>
            <Text style={styles.itemDetailsStatus}>
                Total - {getPriceInRupees(item?.totalAmount)}
            </Text>
            <Text style={styles.itemDetails}>
                Ordered At - {moment(item?.createdAt).format('lll')}
            </Text>
        </View>
    )
}
import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    itemContainer: {
        padding: 5,
        borderWidth: 0.2,
        borderRadius: 2,
        marginHorizontal: 10,
        borderColor: '#656565'
    },
    itemName: {
        fontSize: 15,
        marginBottom: 5,
        fontWeight: '600',
        marginTop: 20,
        color: 'red'
    },
    itemDetails: {
        fontWeight: '600',
        fontSize: 12,
        marginBottom: 5,
        color: '#757575'
    },
    itemDetailsStatus: {
      fontWeight: '600',
      fontSize: 12,
      marginBottom: 5,
      color: '#757575',
      marginTop: -5
    },
    qty_container: {
        backgroundColor: 'white',
        width: '40%',
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8
      },
      icon: {
        marginRight: 5
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14
      },
      placeholderStyle: {
        fontSize: 16
      },
      selectedTextStyle: {
        fontSize: 16
      },
      iconStyle: {
        width: 20,
        height: 20
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16
      },
});
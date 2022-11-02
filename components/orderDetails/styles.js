import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#002951",
    height: 30,
    color: "white",
  },
  footer_container: {
    padding: 5,
    backgroundColor: "#002951",
    height: 60,
    color: "white"
  },
  dialogCont: {
    // height: 200,
    width: 340
  },  
  title: {
    color: "white",
    fontWeight: "600",
  },
  title1: {
    fontWeight: "600",
    fontSize: 18
  },
  amountView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  amountText: {
    fontSize: 25,
    margin: 10,
  },
  btn: {
    margin: 5,
  },
  animation: {
    slideFrom: 'bottom'
  },
  itemContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: '#002951',
    marginBottom: 10,
    marginTop: 10
  },
  itemName: {
      fontSize: 15,
      marginBottom: 5,
      fontWeight: '600'
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
      marginTop: -10
  },
  qty_container: {
    backgroundColor: 'white',
    padding: 16,
    width: '60%',
    marginTop: -20
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
})

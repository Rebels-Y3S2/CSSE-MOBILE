import { StyleSheet } from 'react-native'

// eslint-disable-next-line no-undef
export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%'
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
  plusBtn: {
    backgroundColor: 'green'
  },
  minusBtn: {
    backgroundColor: 'red'
  },
  cardHeader: {
    backgroundColor: '#002951',
    color: 'white'
  },
  cardSubtitle: {
    fontWeight: '600'
  },
  cardName: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: 18,
    textTransform: 'uppercase'
  }
})

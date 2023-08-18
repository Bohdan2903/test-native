import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  main: {
    flex: 1,
    fontFamily: 'NotoSans',
    fontWeight: '400',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    padding: 16,
    justifyContent: 'center',
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5db9ea',
  },
  text: {
    fontSize: 18,
    color: '#555555',
    marginVertical: 8,
  },
  title: {
    fontSize: 22,
    marginVertical: 4,
    textAlign: 'center',
    fontWeight: '700',
    color: '#171616',
    fontFamily: 'NotoSans-Bold',
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'black',
    color: 'white',
    padding: 12,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
    fontSize: 12,
  },
  sprite: {
    height: 0,
    width: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
})

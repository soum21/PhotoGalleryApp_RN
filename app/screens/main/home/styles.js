import {getHeightByPercentage, getWidthByPercentage} from '../../../configs/utils';

export default {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  galleryArea: {
    flex: 5,
    backgroundColor: '#fff'
  },
  buttonBox: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButton1: {
    width: getWidthByPercentage(25),
    height: getHeightByPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#fff',
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    shadowColor: 'rgba(0,0,0, .4)', 
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1, 
    shadowRadius: 1, 
    backgroundColor: '#fff',
    elevation: 2, 
  },
  imageIcon:{
    width: getWidthByPercentage(25),
    height: getHeightByPercentage(15),
  }
};

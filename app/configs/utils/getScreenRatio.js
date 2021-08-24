const React = require("react-native");
const {Dimensions} = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const getHeightRatio = (length) => {
    return length / 667 * deviceHeight;
}

export const getHeightByPercentage = (percentage) =>  {
	return percentage / 100 * deviceHeight;
}

export const getWidthByPercentage = (percentage) => {
	return percentage / 100 * deviceWidth;
}
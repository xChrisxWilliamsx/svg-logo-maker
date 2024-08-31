const colorList = require('color-name-list');

// makes all object values lower case in colorList and checks users color response against all key value pairs in colorList
// returns true if color name or hex code typed in is found.  If false returns false and prompts users to correct response until color found
const validateColors = ((color) => {   
    const lowercaseColorListArray = colorList.map(obj => {
        const newObj = {};
        for (const key in obj) {
          newObj[key] = obj[key].toLowerCase();
        }
        return newObj;
    });
    const findColorName = lowercaseColorListArray.find((data) => data.name == color);
    const findColorHex = lowercaseColorListArray.find((data) => data.hex == color);
    if (findColorName || findColorHex) {
    // console.log("Object found:", findColorName, findColorHex); -- for testing/confirming colors uncomment 
    return true;
    } else {
    return false;
    }
})

module.exports = validateColors;
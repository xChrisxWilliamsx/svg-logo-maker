const validateColors = require('../validateColors/validateColors')

// test expects to be true
test('validateColors', () => {
    const colorResponse = "green";
    expect(validateColors(colorResponse)).toBe(true)
});

// test expects to be true
test('validateColors', () => {
    const colorResponse = "#000000";
    expect(validateColors(colorResponse)).toBe(true)
});

// test expects to be false
test('validateColors', () => {
    const colorResponse = "thisIsABadResponse";
    expect(validateColors(colorResponse)).toBe(false)
});

// test expects to be true
test('validateColors', () => {
    const colorResponse = "#ffffffthisIsAlsoABadResponse";
    expect(validateColors(colorResponse)).toBe(false)
});
// this function converts rgb colors to hexadecimal colors
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

console.log(hex(255, 100, 25));


// this is a factory function - one way of making objects based off of a pattern or recipe
// there is a better and more common methof of making objects
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () { // in this case, every color gets its own instance of rgb function, which is why constructor functions are better
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function () {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
console.log(firstColor.rgb());
firstColor.r = 255;
console.log(firstColor.rgb());
// Creates a blanc, plain JavaScript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object.


// REMEMBER THAT ARROW FUNCTIONS BEHAVE DIFFERENTLY WITH THE KEYWORD THIS


function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const firstColor = new Color(255, 40, 100);
console.log(firstColor); // notice that the firstColor object will not have the rgb and hex functions on itself, but instead they will be on the prototype


function delayedColorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
        //reject(); // we do not have to reject this promise
    })
}

async function changeBackCol() {
    await delayedColorChange(firstColor.rgb(), 0);
    delayedColorChange(firstColor.rgba(0.5), 2000);
}

changeBackCol();

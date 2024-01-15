
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR");
}


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please pass a string next time");
    }

}
//yell("hello");
yell(123);
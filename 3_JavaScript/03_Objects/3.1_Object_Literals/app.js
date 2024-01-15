const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    2022: 450000
};


console.log(fitBitData["totalSteps"]);
console.log(fitBitData.totalSteps);
let lastYear = 2022;
console.log(fitBitData["2022"]);
console.log(fitBitData[lastYear]);

fitBitData["totalMiles"] = 212;
fitBitData[2021] = 350000;
console.log(fitBitData);



let comments = [
    { username: "MWK", text: "lolollo", votes: 9 },
    { username: "Titi", text: "miau", votes: 5 }
];
console.log(comments[0]["username"]);
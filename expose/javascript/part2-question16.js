let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const attribute in statistics) {
    if (attribute[0] == 'r') {
        console.log(statistics[attribute]);
    }
    else if (statistics[attribute] % 2 == 1) {
        console.log(statistics[attribute]);
    }
}
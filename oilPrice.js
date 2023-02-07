function oilPrice(diesel, petrol, octane) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    return diesel * dieselPrice + petrol * petrolPrice + octane * octanePrice;
  }
  let result = oilPrice(30, 20, 10);
  console.log(result);
  
const car = {
    type:"Fiat", 
     model:"500", 
     color:"white",
    start:function(){
        console.log('car has started');
    }

    };

//   console.log(car.model);
//   console.log(car.color);
//   console.log(car.type);
  console.log(car['color']);
 car.start();
    

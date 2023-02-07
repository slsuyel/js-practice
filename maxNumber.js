 function largestNumber() {
        let largest = arr[0];
         for (let i = 1; i < arr.length; i++) {

            let index = i
            Element = arr[index]
            if (Element > largest)
            largest = Element;
         }
         console.log(largest);
      }

   let arr = [5, 10, 20, 3, 98,195];

    largestNumber();
const phones =[
    {Name : 'Samsung', Price : 23000, Color : 'Black'},
    {Name : 'Samphony', Price : 29000, Color : 'Black'},
    {Name : 'Oppo', Price : 20000, Color : 'Black'},
    {Name : 'Nokia', Price : 13000, Color : 'Black'},
    {Name : 'Vivo', Price : 32000, Color : 'Black'},
    {Name : 'htc' , Price : 200, Color : 'Black'},
    {Name : 'Itel' , Price : 1300, Color : 'Black'},
];
    function cheapest(phones){
            let myChoice = phones[0];
            for(let i =0 ; i < phones.length; i++){
                    const phone = phones[i];
                   if( phone.Price < myChoice.Price ){
                        myChoice = phone;
           }
        }
        return myChoice
    }
    var myChoice = cheapest(phones);
    console.log(myChoice);
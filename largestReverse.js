// তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function reverseName(nameOne,nameTwo){
    if (nameOne.length > nameTwo.length ){
        return nameOne.split('').reverse().join('');}
    else return nameTwo.split('').reverse().join('');
}
let result = reverseName('Abiasdddddddddr','kiasasar');
console.log(result); 
function  sum(i){
    //base case
    if(i==1){
        return 1;
    }
    console.log(i)
    return i +sum(i-1);
}
let result=sum(5);
result=sum(10)
console.log(result);
 let fact=1;

for(let i=5;i>=1;i--){
   fact*=i;
}
console.log(fact);
console.log("\n");
console.log("Factorial number is")
function fact1(n){
    if(n==1){
        return 1;
    }
    return n*fact1(n-1);
}
console.log(fact1(5))

//object
const Student={
    name:'Abu Al Shahriar Rifat',
    id:121,
    address:'movie cinema',
    isSingle:true,
    friends:['Apu','Razz','Salam','Amir'],
    car:{
        brand:'tesla',
        price:'50 lac',
        made:2025,
        manufacture:{
            ceo:"Elon musk",
            manufacture_country:"USA"
        }
    },
    my_Age:function(age){
        console.log("I am "+age+"years old")
    }
}
console.log(Student.address);
console.log(Student.car.price);
console.log(Student.car.manufacture.ceo);
console.log(Student.my_Age(25))

let products=[
 {name:"phone",price:12000},
 {name:"television",price:15000},

]
console.log(products[0])

function add(number_1,number_2){
    console.log(number_1+number_2);
    console.log(arguments[3])
}

add(100,200,89,90,78)

const numbers=[45,56,98,19,23];
for(let i=0;i<numbers.length;i++){
    const number=numbers[i];
    console.log(number);
}
for(let number of numbers){
  console.log(number)
}

const productss=[
 {id:1,name:"xiaomi phone One night",price:18997},
 {id:2,name:"xiaomi phone Two night",price:18998},
 {id:3,name:"xiaomi phone Three night",price:18998},
 {id:4,name:"xiaomi phone Four night",price:18998},
 {id:5,name:"xiaomi phone Five night",price:189976},
 {id:6,name:"xiaomi phone Six night",price:189976},
 {id:7,name:"xiaomi phone Seven night",price:189976},
 {id:8,name:"xiaomi  Eight night",price:189974},
 {id:9,name:"xiaomi phone Nine night",price:189975},
 {id:10,name:"xiaomi phone Ten night",price:18995},
]

function matchProducts(products,search){
   const matched=[];
   for(let product of productss){
     if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product)
     }
   }
   return matched;
}
const result1=matchProducts(productss,'phone');
console.log(result1);


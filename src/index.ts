function formatString(input: string, toUpper?: boolean): string {
  
  if(toUpper === false){
    const lowerString = input.toLowerCase();
    return lowerString;
  }else{
    const upperString = input.toUpperCase();
    return upperString;
  }
}
console.log(formatString("Hello"))  
console.log(formatString("Hello", true))  
console.log(formatString("Hello", false))  




function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  const filteredItems = items.filter(item =>item.rating >= 4);
  return filteredItems;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books))




function concatenateArrays<T>(...arrays: T[][]): T[]{
  let newArray : T[] = [];
  for(const array of arrays){
    newArray = newArray.concat(array);
  }
  return newArray;
}
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));




class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number){
    this.make = make;
    this.year = year;
  }

  public getInfo() : string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle{
  private model: string
  
  constructor(make:string, year:number, model: string){
    super(make, year);
    this.model = model;
  }

  getModel(){
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo())
console.log(myCar.getModel())




function processValue(value: string | number): number {
  if(typeof value === 'string'){
    return value.length;
  }else{
    return value * 2;
  }
}
console.log(processValue("hello"))
console.log(processValue(10))




interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
  if(products.length === 0){
    return null;
  }

  let highestPriceProduct = products[0];
  for(let i = 1; i < products.length; i++){
    if(products[i].price > highestPriceProduct.price){
      highestPriceProduct = products[i];

    }
  }
  return highestPriceProduct;

}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products)); 




enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
  if(day === Day.Saturday || day === Day.Sunday){
    return "Weekend";
  }else{
    return "Weekday";
  }
}

console.log(getDayType(Day.Monday))
console.log(getDayType(Day.Sunday))



async function squareAsync(n: number): Promise<number>{
  if(n < 0){
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(n * n);
    }, 1000)
  })
}

squareAsync(4)
.then(console.log)
.catch(console.error)

squareAsync(-3)
.then(console.log)
.catch(console.error)

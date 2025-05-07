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
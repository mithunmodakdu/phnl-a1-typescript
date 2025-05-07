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
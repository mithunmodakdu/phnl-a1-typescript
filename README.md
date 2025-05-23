## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

In TypeScript, enum is a data type that helps us define a set of named constants. It stands for enumeration, and it's similar to creating a custom type with a known and fixed set of values. Enums make code more readable, maintainable, and organized.


**What is the Use of Enums in TypeScript?**

Enums in TypeScript are useful for:

1. Defining a fixed set of named constants
2. Improving code readability by using meaningful names
3. Ensuring type safety by restricting allowed values
4. Enabling auto-completion and type checking in code editors


**Example of Numeric enum**
<pre> 
enum Priority {
  Low = 1,
  Medium = 2,
  High = 3
}

const mediumPriority: Priority = Priority.Medium;
console.log(mediumPriority);  // Output: 2 </pre>


**Example of string enum**
<pre> 
enum UserRole {
  Guest = "GUEST",      
  User = "USER",       
  Admin = "ADMIN"        
}

const role: UserRole = UserRole.Admin;
console.log(role);  // Output: "ADMIN" </pre>


## Provide an example of using union and intersection types in TypeScript.

**Example of using union type**
<pre> 
 type Patient = {
    name: string;
    address: string;
    email?: string;
    gender: 'male' | 'female'| 'Others';
    bloodGroup: 'A+'|'B+'|'O+'|'AB+'|A-'|'B-'|'O-'|'AB-'
  }

  const patient1: Patient = {
    name: 'Rakib',
    email: 'rakib@gmail.com',
    address: 'Mymensingh';
    gender: 'male',
    bloodGroup:'AB+'
  }
</pre>


**Example of using intersection type**
<pre> 
  type FrontDeskBanker = {
    skills: string[];
    designation1: 'Accounts Opening Officer'
  }

  type InvestmentBanker = {
    skills: string[];
    designation2: 'Investment Officer'
  }

  type ExpertBanker = FrontDeskBanker & InvestmentBanker;

  const expertBanker: ExpertBanker ={
    skills: ['Accounts opening', 'Accounts closing', 'BFTN', 'Investment Proposal'],
    designation1: 'Accounts Opening Officer',
    designation2: 'Investment Officer'
  }
 </pre>


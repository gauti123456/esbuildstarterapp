// Import the update function from currentTime.ts
import update from './currentTime';

// Import styles
import './styles/style.scss';

// Call the update function to start updating time
update();

// Basic Types Example
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;

// Output to console
console.log(message);
console.log(`Count: ${count}`);
console.log(`Active: ${isActive}`);

// Interface Example
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

const user: User = {
  name: "Alice",
  age: 30,
};

// Display user info
console.log(`User: ${user.name}, Age: ${user.age}`);

// Enum Example
enum Status {
  Pending = 'PENDING',
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
}

const taskStatus: Status = Status.Pending;

// Output task status
console.log(`Task Status: ${taskStatus}`);

// Type Assertion Example
const inputElement = document.querySelector('#input-field') as HTMLInputElement;
inputElement.addEventListener('change',() => {
    greet(inputElement.value)
})
// Function with Types Example
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// Call the function and output result
greet("TypeScript");

// Use the type assertion to set input value
if (inputElement) {
  inputElement.value = "TypeScript is awesome!";
}

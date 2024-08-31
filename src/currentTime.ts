import { format } from 'date-fns';

// Get a reference to the HTML element with id 'time-now'
const span = document.querySelector<HTMLSpanElement>('#time-now');

export default function update(): void {
  if (span) {
    // Update the text content of the span element with the formatted current time
    span.textContent = format(new Date(), 'h:mm:ssa');
  }
  // Call the update function again after 1 second
  setTimeout(update, 1000);
}

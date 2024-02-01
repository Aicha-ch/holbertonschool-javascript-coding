// Display a welcome message and prompt for the user's name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Resume reading from standard input
process.stdin.resume();

// Listen for input availability
process.stdin.on('readable', () => {
  // Read user input from standard input
  const userInput = process.stdin.read();

  // Check if input is available
  if (userInput) {
    // Display the user's name
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

// Listen for the end of standard input
process.stdin.on('end', () => {
  // Display a closing message
  process.stdout.write('This important software is now closing\n');
});

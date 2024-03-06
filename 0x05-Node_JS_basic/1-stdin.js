process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.trim();

  if (name !== '') {
    console.log(`Your name is: ${name}`);
  } else {
    console.log('Your name is: (not provided)');
  }

  console.log('This important software is now closing');
  process.exit();
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

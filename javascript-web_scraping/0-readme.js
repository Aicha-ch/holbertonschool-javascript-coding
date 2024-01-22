#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const reader = fs.createReadStream(file, 'utf-8');

reader.on('error', (error) => {
  console.error(error);
});

reader.on('data', (data) => {
  console.log(data);
});
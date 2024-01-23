#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, request, body) => {
  if (error) {
    console.log(error);
  }

  const obj = JSON.parse(body);
  const completedTasks = {};
  for (const task of obj) {
    if (task.completed) {
      if (task.userId in completedTasks) {
        completedTasks[task.userId] += 1;
      } else {
        completedTasks[task.userId] = 1;
      }
    }
  }

  console.log(completedTasks);
});

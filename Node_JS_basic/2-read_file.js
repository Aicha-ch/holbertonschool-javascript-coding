const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const totalStudents = lines.length - 1;

    const studentsByField = {};

    lines.forEach((line) => {
      const [, , , field] = line.split(',');

      if (field) {
        studentsByField[field] = (studentsByField[field] || 0) + 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    Object.entries(studentsByField).forEach(([field, count]) => {
      const studentsList = lines
        .filter((line) => line.split(',')[3] === field)
        .map((line) => line.split(',')[0])
        .join(', ');

      console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const fs = require('fs');

// module.exports = myFunction

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.split('\n').filter((line) => line.length > 0);
      console.log(`Number of students: ${lines.length - 1}`);
      const fields = {};
      for (const line of lines) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }
      delete fields.field;
      for (const field in fields) {
        if (field) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;

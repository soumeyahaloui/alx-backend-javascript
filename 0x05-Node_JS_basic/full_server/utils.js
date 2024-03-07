// full_server/utils.js
import fs from 'fs';

/**
 * Reads the database asynchronously.
 * @param {string} filePath The path to the database file.
 * @returns {Promise} A promise that resolves to an object containing arrays of first names per field.
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};

        for (const line of lines.slice(1)) {
          const [, firstname, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }

        resolve(students);
      }
    });
  });
}

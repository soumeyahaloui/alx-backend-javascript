// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('../database.csv');
      const response = ['This is the list of our students'];
      
      Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach(field => {
        response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      });

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('../database.csv');
      const list = students[major] ? students[major].join(', ') : '';
      res.status(200).send(`List: ${list}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;

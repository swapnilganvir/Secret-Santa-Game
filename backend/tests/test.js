import { assignSecretSanta } from '../src/assigner.js';
import assert from 'assert';

const assignments = await assignSecretSanta(
  '../data/employees.csv',
  '../data/last_year.csv',
  '../data/output.csv'
);

// Test will Fail if any employee chose themselves as their secret child
try {
  let result = true;
  assignments.forEach(santa => {
    if (santa.Employee_EmailID === santa.Secret_Child_EmailID) {
      result = false;
    }
  });
  assert(result);
  console.log('Test passed!');
} catch (error) {
  console.log('Test failed');
}

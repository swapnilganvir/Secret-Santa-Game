import { readCSV, writeCSV } from './fileHandler.js';

function shuffleArray(array) {
  return array
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export const assignSecretSanta = async (
  employeeFile,
  lastYearFile,
  outputFile
) => {
  const employees = await readCSV(employeeFile);
  const lastYearAssignments = await readCSV(lastYearFile);

  if (employees.length < 2) {
    throw new Error('Not enough employees to run Secret Santa.');
  }

  const assignments = [];

  for (let i = 0; i < employees.length; i++) {
    const santa = employees[i];
    const lastYear = lastYearAssignments.find(
      entry => entry.Employee_EmailID === santa.Employee_EmailID
    );

    const usedIDs = new Set();
    let shuffled = shuffleArray([...employees]);
    let child = shuffled[i];

    while (
      santa.Employee_EmailID === child.Employee_EmailID ||
      (lastYear && lastYear.Secret_Child_EmailID === child.Employee_EmailID) ||
      usedIDs.has(child.Employee_EmailID)
    ) {
      shuffled = shuffleArray([...employees]);
      child = shuffled[i];
    }

    usedIDs.add(child.Employee_EmailID);

    assignments.push({
      Employee_Name: santa.Employee_Name,
      Employee_EmailID: santa.Employee_EmailID,
      Secret_Child_Name: child.Employee_Name,
      Secret_Child_EmailID: child.Employee_EmailID,
    });
  }

  await writeCSV(outputFile, assignments);
  return assignments;
};

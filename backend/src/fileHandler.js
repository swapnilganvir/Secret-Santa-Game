import fse from 'fs-extra';
import parser from 'csv-parser';
import fastcsv from 'fast-csv';

export const readCSV = async filePath => {
  return new Promise((resolve, reject) => {
    const results = [];
    fse
      .createReadStream(filePath)
      .pipe(parser())
      .on('data', data => results.push(data))
      .on('end', () => resolve(results))
      .on('error', err => reject(err));
  });
};

export const writeCSV = async (filePath, data) => {
  return new Promise((resolve, reject) => {
    const ws = fse.createWriteStream(filePath);
    fastcsv
      .write(data, { headers: true })
      .pipe(ws)
      .on('finish', resolve)
      .on('error', reject);
  });
};

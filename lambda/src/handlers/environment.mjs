import * as fs from 'fs';
import * as path from 'path';

const args = {};
process.argv.slice(2).forEach((arg) => {
  const [key, value] = arg.split('=');
  args[key.replace(/^--/, '')] = value;
});

const ENV_FILE_NAME = args['config'] || '.env';

// Get the path to the .env file
const envFilePath = path.resolve(process.cwd(), ENV_FILE_NAME);

// Read the contents of the .env file
const envFileContent = fs.readFileSync(envFilePath, 'utf-8');

// Parse the .env file contents to get only the variables defined in the file
export const USER_CONFIG = envFileContent
  .split('\n')
  .filter((line) => line.trim() && !line.startsWith('#')) // Remove empty lines and comments
  .reduce((acc, line) => {
    const [key, value] = line.split('=');
    acc[key.trim()] = value.trim();
    return acc;
  }, {});

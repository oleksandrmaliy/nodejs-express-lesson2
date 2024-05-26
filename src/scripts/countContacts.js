import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');

    return JSON.parse(contacts).length;
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

console.log(await countContacts());

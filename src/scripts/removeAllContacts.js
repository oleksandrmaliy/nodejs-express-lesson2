import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const noContacts = JSON.stringify([]);
    await fs.writeFile(PATH_DB, noContacts);

    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await removeAllContacts();

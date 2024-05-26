import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const oldContactsSet = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(oldContactsSet);
    const newContacts = [];

    contacts.forEach(function (contact) {
      if (contacts?.length) {
        const probability = Math.random();
        if (probability < 0.5) {
          newContacts.push(contact);
        }
      }
      return newContacts;
    });

    if (newContacts.length < contacts.length) {
      const newContactsSet = JSON.stringify(newContacts);
      await fs.writeFile(PATH_DB, newContactsSet);
      console.log('Дані успішно записані у файл.');
    } else {
      console.log('Немає даних для перезапису. (');
    }
  } catch (err) {
    console.error('Помилка читання файлу:', err);
  }
};

await thanos();

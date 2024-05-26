import fs from 'fs/promises';
import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const newContactsSet = faker.helpers.multiple(createFakeContact, {
      count: 1,
    });

    const newOneContact = newContactsSet[0];

    const oldContacts = await fs.readFile(PATH_DB, 'utf8');

    const contactsNewSet = () => {
      if (oldContacts?.length) {
        const oldContactsSet = JSON.parse(oldContacts);
        return JSON.stringify([...oldContactsSet, newOneContact]);
      }
      return JSON.stringify([newOneContact]);
    };

    await fs.writeFile(PATH_DB, contactsNewSet());

    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await addOneContact();

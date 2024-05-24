import fs from 'fs/promises';
import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = JSON.stringify(
      faker.helpers.multiple(createFakeContact, {
        count: number,
      }),
    );
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await generateContacts(5);

import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import writeContacts from '../utils/writeContacts.js';

export const generateContacts = async (count) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = JSON.parse(data);

        // Генеруємо задану кількість нових контактів
        const newContacts = [];
        for (let i = 0; i < count; i++) {
            newContacts.push(createFakeContact());
        }

        // Додаємо нові контакти до існуючих
        contacts = [...contacts, ...newContacts];

        // Записуємо оновлений масив контактів назад у файл
        await writeContacts(contacts);
        console.log(`${count} нових контактів було додано!`);
    } catch (error) {
        console.error('Помилка при додаванні контактів:', error);
    }
};

generateContacts(5);





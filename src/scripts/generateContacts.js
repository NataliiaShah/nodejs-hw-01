import fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';
import writeContacts from "../utils/writeContacts.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PATH_DB = path.resolve(__dirname, '../db/db.json');

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

        await writeContacts(contacts);
        console.log(`${count} нових контактів було додано!`);
    } catch (error) {
        console.error('Помилка при додаванні контактів:', error);
    }
};

generateContacts(5);





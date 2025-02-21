import fs from 'node:fs/promises';
import path from 'node:path';
import { createFakeContact } from '../utils/createFakeContact.js';
import writeContacts from "../utils/writeContacts.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PATH_DB = path.resolve(__dirname, '../db/db.json');

// Функція для додавання одного випадкового контакту
export const addOneContact = async () => {
    try {
        // Зчитуємо наявні контакти з файлу
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Генеруємо новий випадковий контакт
        const newContact = createFakeContact();

        // Додаємо новий контакт до масиву
        contacts.push(newContact);

        // Записуємо оновлений масив контактів у файл
        await writeContacts(contacts);
        console.log("Нове ім'я та телефон було додано до контактів!");
    } catch (error) {
        console.error('Помилка при додаванні контакту:', error);
    }
};

addOneContact();

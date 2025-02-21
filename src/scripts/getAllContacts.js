import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PATH_DB = path.resolve(__dirname, '../db/db.json');

export const getAllContacts = async () => {
    try {
        // Зчитуємо дані з файлу db.json
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        console.log("Контакти зчитано успішно:", contacts);
        return contacts;
    } catch (error) {
        console.error('Помилка при зчитуванні контактів з файлу:', error);
        return [];
    }
};

getAllContacts();


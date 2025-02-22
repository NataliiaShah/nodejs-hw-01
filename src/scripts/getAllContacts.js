import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const getAllContacts = async () => {
    try {
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


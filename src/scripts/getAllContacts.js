import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log("Контакти зчитано успішно:", contacts);
        return contacts;
    } catch (error) {
        console.error('Помилка при зчитуванні контактів з файлу:', error);
        return [];
    }
};

getAllContacts();


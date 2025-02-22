import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Перевіряємо, чи є контакти в масиві
        if (contacts.length > 0) {
            // Видаляємо останній контакт
            contacts.pop();
            // Записуємо оновлений масив в файл
            await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
            console.log('Останній контакт був видалений.');
        } else {
            console.log('У файлі немає контактів для видалення.');
        }
    } catch (error) {
        console.error('Помилка при видаленні останнього контакту з файлу:', error);
    }
};

removeLastContact();

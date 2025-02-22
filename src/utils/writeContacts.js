import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

async function writeContacts(contacts) {
    try {
        if (!Array.isArray(contacts)) {
            throw new Error('Контакти повинні бути масивом.');
        }
        const data = JSON.stringify(contacts, null, 2);
        await fs.writeFile(PATH_DB, data, { encoding: 'utf-8' });

        console.log('Контакти були успішно записані у файл.');
    } catch (error) {
        console.error('Помилка при записі файлу контактів:', error);
    }
}

export default writeContacts;

import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PATH_DB = path.resolve(__dirname, '../db/db.json');

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Якщо масив не порожній, очищуємо його
        if (contacts.length > 0) {
            // Очищаємо масив контактів
            const emptyContacts = [];
            // Записуємо порожній масив в файл
            await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2), 'utf-8');
            console.log('Всі контакти були видалені.');
        } else {
            console.log('Контакти вже відсутні у файлі.');
        }
    } catch (error) {
        console.error('Помилка при видаленні контактів з файлу:', error);
    }
};

removeAllContacts();

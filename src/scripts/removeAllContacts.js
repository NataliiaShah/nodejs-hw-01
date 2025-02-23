import { readContacts } from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await readContacts();

        // Якщо масив не порожній, очищуємо його
        if (contacts.length > 0) {
            const emptyContacts = [];
            await writeContacts(emptyContacts);
            console.log('Всі контакти були видалені.');
        } else {
            console.log('Контакти вже відсутні у файлі.');
        }
    } catch (error) {
        console.error('Помилка при видаленні контактів з файлу:', error);
    }
};

removeAllContacts();

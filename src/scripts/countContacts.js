import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const contacts = await readContacts();

        // Повертаємо кількість контактів
        const contactCount = contacts.length;
        console.log(`Кількість контактів: ${contactCount}`);
        return contactCount;
    } catch (error) {
        console.error('Помилка при зчитуванні контактів з файлу:', error);
        return 0;
    }
};

countContacts();

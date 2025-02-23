
import { PATH_DB } from '../constants/constants.js';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

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

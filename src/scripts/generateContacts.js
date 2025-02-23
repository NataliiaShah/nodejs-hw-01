import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import writeContacts from '../utils/writeContacts.js';

export const generateContacts = async (count) => {
    try {
        const contacts = await readContacts();
        
        // Генеруємо задану кількість нових контактів
        const newContacts = [];
        for (let i = 0; i < count; i++) {
            newContacts.push(createFakeContact());
        }

        // Додаємо нові контакти до існуючих
        const updatedContacts = [...contacts, ...newContacts];

        // Записуємо оновлений масив контактів назад у файл
        await writeContacts(updatedContacts);
        console.log(`${count} нових контактів було додано!`);
    } catch (error) {
        console.error('Помилка при додаванні контактів:', error);
    }
};

generateContacts(5);





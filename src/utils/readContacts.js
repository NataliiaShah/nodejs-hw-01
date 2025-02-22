import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/constants.js';

export async function readContacts() {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
        const contacts = JSON.parse(data);
        console.log(contacts);
        return contacts;
    } catch (error) {
        console.error('Error reading the contacts file:', error);
    }
}

readContacts();


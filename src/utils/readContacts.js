import fs from 'node:fs/promises';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PATH_DB = path.resolve(__dirname, '../db/db.json');

async function readContacts() {
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

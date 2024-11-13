import { promises as fs } from "fs";

async function readFileAsync(filePath: string): Promise<void> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file: ${error.message}');       
    }
}

const filePath = 'src/example.txt';
readFileAsync(filePath);
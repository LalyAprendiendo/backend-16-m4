import { writeFileSync, readFileSync } from "node:fs"
import { randomUUID } from "node:crypto"

interface BookData {
    name: string
    released: string
    author: string
}
class Db {
    private static PATH: string = "./src/database/books.json"

    private static testConnection() {

    }

    static readFile(): BookData[] {
        const dataTs = readFileSync(Db.PATH, { encoding: "utf-8" })
        return JSON.parse(dataTs)

    }

    static writeFile(data: BookData[]) {
        const dataTs = JSON.stringify(data)

        writeFileSync(Db.PATH, dataTs)

    }
}

const { readFile, writeFile } = Db



export { readFile, writeFile }
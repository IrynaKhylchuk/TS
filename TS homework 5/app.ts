class PhoneDirectory {
    contacts: { name: string, phoneNumber: number }[]

    constructor() {
        this.contacts = []
    }

    addContact(name: string, phoneNumber: number): void {
        let contact = {
            name: name,
            phoneNumber: phoneNumber
        }
        this.contacts.push(contact)
    }

    searchContactByName(name: string): number | undefined {
        let contact = this.contacts.find(contact => contact.name === name)
        return contact ? contact.phoneNumber : undefined
    }

    searchContactByPhoneNumber(phoneNumber: number): string | undefined {
        let contact = this.contacts.find(contact => contact.phoneNumber === phoneNumber)
        return contact ? contact.name : undefined
    }

    deleteContactByName(name: string): void {
        this.contacts = this.contacts.filter(contact => contact.name !== name)
    }
}

const phoneDirectory = new PhoneDirectory()

phoneDirectory.addContact('John Doe', 123456789)
phoneDirectory.addContact('Jane Doe', 987654321)

const findContactByName = phoneDirectory.searchContactByName('John Doe')
console.log('Contact phone number:', findContactByName)

const findContactByNumber = phoneDirectory.searchContactByPhoneNumber(987654321)
console.log('Contact name:', findContactByNumber)

phoneDirectory.deleteContactByName('John Doe')
console.log(phoneDirectory)
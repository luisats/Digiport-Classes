// 7. Create an object 'agenda' with an array of 'contacts'.
// Each contact has 'name' and 'phone'.
// Add a method 'listContacts()' that prints each contact's name and phone.
// Add a method 'addContact(name, phone)' to add a new contact.
// 

let agenda = {
    contacts: [
        { name: "Alice", phone: "123-456" },
        { name: "Bob", phone: "987-654" },
    ],

listContacts: function () {
    for (let i = 0; i < this.contacts.length; i++) {
        console.log(
            "Name: " + this.contacts[i].name + ", Phone: " + this.contacts[i].phone
        );
    }
},

addContact: function (name, phone) {
    this.contacts.push({ name: name, phone: phone });
    },
};

// Testando os métodos
agenda.listContacts(); // Lista todos os contatos
agenda.addContact("Charlie", "555-555"); // Adiciona um novo contato
agenda.listContacts(); // Lista todos os contatos novamente, incluindo o novo
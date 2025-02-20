const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '12342344',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'Jose@email.com',
    phone: '55342334',
    category_id: v4(),
  },
]

class ContactsRepository {
    findAll(){
      return new Promise((resolve, reject) => {
        resolve(contacts);
      });
    }

    findById(id) {
      return new Promise((resolve, reject) => {
        resolve(contacts.find((contact) => contact.id === id),
      );
      });
    }

    delete(id) {
      return new Promise((resolve, reject) => {
        contacts = contacts.filter((contact) => contact.id !== id);
        resolve();
      })
    }
}

module.exports = new ContactsRepository();

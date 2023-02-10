const fs = require("fs");
const path = require("path");
//  ==================include module path
// ============to  resolve possible difficulties with directories of the files
const contactsPath = path.resolve("db/contacts.json");

//================== create a function
//============to get whole list of a contacts from.json file, in a table form
function listContacts() {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    const contactList = JSON.parse(data);
    console.table(contactList);
  });
}

//===== function to find particular contact with  given id number

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      console.log("oops, we have some error", error);
    }
    const contactById = JSON.parse(data).find(
      (contact) => contact.id.trim() === String(contactId)
    );
    console.table(contactById);
  });
}

//=======function to remove contacts
// ===(create list of contacts except the one to be deleted,
// ===and rewrite remaining contacts as a whole to a file)

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      console.log("oops, we have some error", error);
    }

    const contactsExceptId = JSON.parse(data).filter(
      (contact) => contact.id !== String(contactId)
    );

    fs.writeFile(contactsPath, JSON.stringify(contactsExceptId), (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
}

//==== function to add contact (push new Object to an array of Objects)
function addContact(name, email, phone) {
  fs.readFile(contactsPath, "utf8", (error, data) => {
    if (error) {
      console.log("oops, we have some error", error);
    }
    const contactsList = JSON.parse(data);

    contactsList.push({
      id: contactsList.length + 1,
      name,
      email,
      phone,
    });
    console.table(contactsList);

    fs.writeFile(contactsPath, JSON.stringify(contactsList), (error) => {
      if (error) {
        console.log(error);
      }
    });
  });
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

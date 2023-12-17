const fs = require("fs");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./storage.json", (err, persons) => {
      if (err) reject("Something went wrong file reading the file");
      else resolve(JSON.parse(persons));
    });
  });
};

const getOnePerson = async (id) => {
  const persons = await getAllUsers();

  return new Promise((resolve, reject) => {
    const result = persons.filter((person) => person.id === id);
    if (result.length > 0) resolve(result);
    else reject(`There is no user with id -> ${id}`);
  });
};

module.exports = {
  getAllUsers,
  getOnePerson,
};

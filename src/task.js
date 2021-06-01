users = [
  { id: 12, name: "ravi", age: 20, city: "Delhi" },
  { id: 13, name: "vishal", age: 30, city: "noida" },
  { id: 14, name: "anil", age: 25, city: "Chandigarh" },
];

// <!-------Creating an element------

const createUsers = (user) => users.push(user);

user1 = { id: 34, name: "anish", age: 28, city: "agra" };
createUsers(user1);

// console.log(users);

// <!-------Read------
const readUser = (id) => {
  let result = users.find((item) => item.id == id); // Find is Not for multiple users, with same name
  console.log(result);
};
// readUser(13);

const updateUser = (id, user) => {
  const index = users.findIndex((user) => user.id == id);
  users[index] = user;
};

const id = 13;
const user = { id: id, name: "rajiv", age: 24, city: "banaras" };
updateUser(id, user);
// console.log(users);

// <!-------Delete------

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
};
deleteUser(14);
console.log(users);

//  New Update function for changing Only 'Given Keys'

const newUpdate = (id, obj) => {
    const index = users.findIndex(user => user.id == id);
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    // console.log(users[0])
    console.log(index)
   console.log(keys,values)
     for (i =0; i<keys.length; i++) {
        users[index][keys[i]] = values[i]  // users[0].'name' = singh
        console.log(users)
   }
 }


newUpdate(12,{name: 'singh', age: 40})
// console.log(users)
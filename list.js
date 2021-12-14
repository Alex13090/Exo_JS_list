const userlist = [
    {id: 1, prenom: "pierre", age: 40, role: "utilisateur"},
    {id: 2, prenom: "antoine", age: 20, role: "utilisateur"},
    {id: 3, prenom: "gerard", age: 30, role: "utilisateur"},
    {id: 4, prenom: "laurent", age: 18, role: "administrateur"}
];

let list = document.getElementById("usersList");
// list of user
function listing() {
    userlist.map(user => {
    // je crée une variable à chaque tour de boucle 
    // qui sera un nouvel element html ol (liste ordonnée)
        let newOl = document.createElement("ol");
        // create button
        let btnDel = document.createElement("input");
        btnDel.setAttribute('type', "button");
        btnDel.setAttribute('value', "supprimer");
        // je crée une condition pour varier les couleurs selon le role
        if (user.role == "administrateur"){
            newOl.style.color = "red";
        } else {
            newOl.style.color = "blue";
        }
        // j'ajoute le text à l'élément crée avec un template string
        newOl.textContent = 
            `ID: ${user.id};
            Prénom: ${user.prenom};
            Age: ${user.age};
            Role: ${user.role}`;
        // enfin j'ajoute cet élément à la variable qui fait appelle à la div.
        list.appendChild(newOl);
        // add button after list
        newOl.appendChild(btnDel);

        btnDel.addEventListener("click", event => {
            list.removeChild(newOl);
        });
    });
}
listing();
// create new user
let createBtn = document.getElementById("button");

createBtn.addEventListener("click", function()  {
    // create new list
    let userId = userlist.length + 1;
    let firstName = document.getElementById("forFirstname").value;
    let userAge = document.getElementById("forAge").value;
    let roleList = document.getElementById("forRole").value;
    // new list
    let newUser = {id: userId, prenom: firstName, age: userAge, role: roleList};
    userlist.push(newUser);
    list.innerHTML = "";
    listing();
});
// reset form
function resetForm() {
    document.getElementById("forFirstname").reset();
    document.getElementById("forAge").reset();
    document.getElementById("forRole").reset();
    return;
}
// sort By
let idSort = document.getElementsByTagName("idSort");
let firstNameSort = document.getElementsByTagName("firstNameSort");
let ageSort = document.getElementsByTagName("ageSort");
// count nbr clic    
/*
let count = 0;
button.onclick = function() {
  count += 1;
};
*/
function sortById() {
    userlist.sort((a, b) => {
        return a.id - b.id;
    });
    list.innerHTML = "";
    listing();
}

function sortByFirstname() {
    userlist.sort((a, b) => {
        return a.prenom.localeCompare(b.prenom)
    });
    list.innerHTML = "";
    listing();
}

function sortByAge() {
    userlist.sort((a, b) => {
        return a.age - b.age;
    });
    list.innerHTML = "";
    listing();
}
// searching
let searchValue = document.getElementById("searchingFor").value;
searchValue.addEventListener("input", event => {
    let newUserList = userlist.filter(
        user => user.age == searchValue
        || user.prenom.includes(searchValue)
        || user.role.includes(searchValue)
        || user.id == searchValue
    );
    list.innerHTML = "";
    listing(newUserList);
});
    

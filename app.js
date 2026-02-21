const addInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("list");

let vazifalar = [];
let mylist = []

// for(let i = 0; i < localStorage.length; i++) {
//   const kalit = localStorage.key(i);
//   console.log(kalit,localStorage.getItem(kalit))
//   vazifaQidirish(localStorage.getItem(kalit))
// }


const user ={
  ism:'Abror',
  status:'Admin',
  yil:2026
}
console.log(user.toString())
localStorage.setItem('user',JSON.stringify(user));  
console.log(localStorage.getItem('user'))



function vazifaQoshish() {
  if (addInput.value.trim().length > 2);
   text = addInput.value.trim();

  vazifalar.push(text);
localStorage.setItem(vazifalar.length, text)
  // li element yartadi
  const li = document.createElement("li");
  // input element yaratadi
  const checkbox = document.createElement("input");
  // input typeni checkbox qilib belgilaydi
  checkbox.type = "checkbox";

  const span = document.createElement("p");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete";

  checkbox.onchange = () => {
    span.classList.toggle("done");
  };

  delBtn.onclick = () => {
    li.remove();
    vazifalar = vazifalar.filter((vazifa) => vazifa !== text);
  };

  li.append(checkbox, span, delBtn);
  list.appendChild(li);
  mylist.push(li);
  addInput.value = "";
}

function vazifaQidirish() {
  const searchText = searchInput.value.trim().toLowerCase();

  list.innerHTML = "";
  const mylist2 = mylist.filter((li) =>
    li.textContent.toLowerCase().includes(searchText),
  );
  
  list.append(...mylist2);
}

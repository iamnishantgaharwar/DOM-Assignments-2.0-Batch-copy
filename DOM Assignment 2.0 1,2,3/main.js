
function editLi(params) {
  let li = document.querySelectorAll("li");
  const liArr = [...li];
  console.log(liArr);
  li[2].innerHTML = "Project";
}


function addLi(params) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = "Hire Me"
    ul.appendChild(li) 
}
editLi();
addLi();




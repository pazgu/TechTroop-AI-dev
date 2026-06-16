let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

const wisdomInput = document.getElementById("wisdomInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const wisdomList = document.getElementById("wisdomList");

function renderWisdom() {
  wisdomList.innerHTML = "";

  wisdom.forEach((item) => {
    const li = document.createElement("li");
    li.className = "wisdom-item";

    const textNode = document.createTextNode(item.text);

    const deleteX = document.createElement("span");
    deleteX.className = "delete-x";
    deleteX.innerText = " ✕ ";

    deleteX.onclick = function () {
      deleteSpecificWisdom(item.id);
    };

    li.appendChild(textNode);
    li.appendChild(deleteX);
    wisdomList.appendChild(li);
  });
}

function addWisdom() {
  const textValue = wisdomInput.value.trim();
  if (!textValue) return;

  const wisdomObject = {
    id: Date.now() + Math.random().toString(36).substr(2, 5),
    text: textValue,
  };

  wisdom.push(wisdomObject);

  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
    console.log("Local Storage Updated (Even length detected):", wisdom.length);
  }

  wisdomInput.value = "";
  renderWisdom();
}

function deleteSpecificWisdom(id) {
  wisdom = wisdom.filter((item) => item.id !== id);

  localStorage.setItem("wisdom", JSON.stringify(wisdom));
  renderWisdom();
}

function clearAllWisdom() {
  wisdom = [];
  localStorage.removeItem("wisdom");
  renderWisdom();
}

addBtn.addEventListener("click", addWisdom);
clearBtn.addEventListener("click", clearAllWisdom);

renderWisdom();

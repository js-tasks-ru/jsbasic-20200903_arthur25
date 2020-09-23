/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  let list = friends.map(function (item) {
    let li = document.createElement("li");
    li.textContent = item.firstName + " " + item.lastName;

    return li;
  });

  list.forEach(function (item) {
    ul.appendChild(item);
  });

  return ul;
}

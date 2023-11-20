/*Отримати список користувачів з віддаленого ресурсу /users.
Використати fetch.*/

const URL = "https://jsonplaceholder.typicode.com";

async function fetchUsers() {
  try {
    const response = await fetch(`${URL}/users`);
    if (!response.ok) throw new Error(`Network error: ${response.status}`);
    const users = await response.json();
    console.log("Users list:");
    users.forEach(user => console.log(user));
  } catch (error) {
    console.error("Error:", { message: error.message, status: error.status });
  }
}

fetchUsers();
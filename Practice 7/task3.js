/*Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
Використати fetch.
Для нового користувача вказати поля name, username, email.
Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
Після отримання відповіді від API, перевірити чи запит виконався успішно
Вивести у консоль результат*/

const URL = "https://jsonplaceholder.typicode.com";

const newUser = {
  name: "Yulia",
  username: "yutmnk",
  email: "yutmnk@gmail.com"
};

async function createNewUser() {
  try {
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (!response.ok) throw new Error(`Network error: ${response.status}`);

    const createdUser = await response.json();
    console.log("New user has been created:");
    console.log(createdUser);
  } catch (error) {
    console.error("Error:", { message: error.message, status: error.status });
  }
}

createNewUser();
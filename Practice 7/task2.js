/*Отримати список усіх альбомів які належать користувачу з id - 10.
Використати fetch.
Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)*/

const URL = "https://jsonplaceholder.typicode.com";
const userID = 10;

async function fetchUserAlbums() {
    try {
        const response = await fetch(`${URL}/users/${userID}/albums`);
        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        console.log(response.status);

        const userAlbums = await response.json();
        console.log(`List of user albums with id: ${userID}`);

        userAlbums.forEach(album => console.log(album));
    } catch (error) {
        console.error("Error:", { message: error.message, status: error.status });
    }
}

fetchUserAlbums();
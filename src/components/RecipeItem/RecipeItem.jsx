// 1. Створити новий репозиторій goiteens - recipies - js розгорнути в ньому create - react - app
// 2. Створити файл recipies.json з наступними даними
// 3.	Розібрати данні з файлу та оцінити роботу
// на які компоненти можна розділити  проєкт
// які пропси будуть отримувати кожен з компонентів
// які типи пропсів потрібно передати кожному компоненту
// 4.	Створити компонент Recipe який буде приймати масив з даними як пропс recipe та використовувати в App.
// 5.	Для відображення іконок використати бібліотеку react - icons.Іконки повинні передаватися компоненту як пропси.
// 6.	Створити компонент RecipeInfo який буде приймати як пропси text та icon та буде використаний в компоненті Recipe.
// Кожен проп повинен бути описаний пакетом prop - types.

export const RecipeItem = ({ recipe: { name, time, servings, calories, difficulty, image } }) => {
    return <>
        <li class="item">
            <h2 class="name">{name}</h2>
            <h3 class="time">{time}</h3>
            <p class="servings">{servings}</p>
            <p class="calories">{calories}</p>
            <p class="difficulty">{difficulty}</p>
            <img class="image" src={image} alt={name} />
        </li>
    </>
}
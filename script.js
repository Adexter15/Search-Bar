// const dataArray = [
//   "Apple",
//     "Banana",
//     "Cherry",
//     "Date",
//     "Elderberry",
//     "Fig",
//     "Grape",
//     "Honeydew",
//     "Kiwi",
//     "Lemon",
//     "Mango",
//     "Nectarine",
//     "Orange",
//     "Papaya",
//     "Quince",
//     "Raspberry",
//     "Strawberry",
//     "Tomato",
//     "Ugli fruit",
//     "Vanilla bean",
//     "Watermelon",
//     "Xigua (Chinese watermelon)",
//     "Yuzu",
//     "Zucchini",
//     "Almond",
//     "Blueberry",
//     "Cranberry",
//     "Durian",
//     "Eggplant",
//     "Figs"
// ];

// const searchBar = document.getElementById('searchBar');
// const results = document.getElementById('results');
// const noResults = document.getElementById('noResults');

// function updateResults() {
//   const searchTerm = searchBar.value.toLowerCase().trim(); // Trim whitespace
//   if (searchTerm === '') {
//       results.style.display = 'none';
//       noResults.style.display = 'none';
//   } else {
//       const filteredArray = dataArray.filter(item => item.toLowerCase().includes(searchTerm));
//       if (filteredArray.length === 0) {
//           results.style.display = 'none';
//           noResults.style.display = 'block';
//       } else {
//           displayResults(filteredArray);
//           results.style.display = 'block';
//           noResults.style.display = 'no item found';
//       }
//   }
// }

// function displayResults(filteredArray) {
//   results.innerHTML = '';
//   filteredArray.forEach(item => {
//       const li = document.createElement('li');
//       li.textContent = item;
//       results.appendChild(li);
//   });
// }

// searchBar.addEventListener('input', updateResults);

const dataArray = [
            "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig",
            "Grape", "Honeydew", "Kiwi", "Lemon", "Mango", "Nectarine",
            "Orange", "Papaya", "Quince", "Raspberry", "Strawberry",
            "Tomato", "Ugli fruit", "Vanilla bean", "Watermelon",
            "Xigua (Chinese watermelon)", "Yuzu", "Zucchini", "Almond",
            "Blueberry", "Cranberry", "Durian", "Eggplant", "Figs"
        ];

        const searchBar = document.getElementById('searchBar');
        const suggestions = document.querySelector('.suggestions');
        const suggestionList = document.getElementById('suggestionList');
        const noMatch = document.getElementById('noMatch');

        searchBar.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            const filteredArray = dataArray.filter(item => item.toLowerCase().includes(searchTerm));

            if (searchTerm === '') {
                suggestions.style.display = 'none';
                noMatch.style.display = 'none';
                return;
            }

            suggestionList.innerHTML = '';
            if (filteredArray.length > 0) {
                filteredArray.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    li.addEventListener('click', function() {
                        searchBar.value = item;
                        suggestions.style.display = 'none';
                    });
                    suggestionList.appendChild(li);
                });
                suggestions.style.display = 'block';
                noMatch.style.display = 'none';
            } else {
                suggestions.style.display = 'none';
                noMatch.style.display = 'block';
            }
        });

        searchBar.addEventListener('focusout', function() {
            setTimeout(() => {
                suggestions.style.display = 'none';
            }, 200);
        });
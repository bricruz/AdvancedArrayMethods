const colors = ['teal', 'magenta', 'cyan']
function myForEach(arr, func) {
    for (el of arr) {
        func(el, arr.indexOf(el), arr);
    }
}
myForEach(colors, function (color, el) {
    console.log(color.toUpperCase(), 'at index of ', el);
})

//map

const todos = [
    {
        id: '1',
        text: 'Groceries',
        priority: 'High'
    },
    {
        id: '2',
        text: 'Play CoD',
        priority: 'Low'
    },
    {
        id: '3',
        text: 'Grade CodeHS',
        priority: 'High'
    },
    {
        id: '4',
        text: 'Progress Monitor',
        priority: 'Medium'
    }
];

const todosText = todos.map(function (todo) {
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));

const urls = links.map(function (a) {
    return a.href;
})

function myMap(arr, func) {
    const newArr = [];
    for (val of arr) {
        newArr.push(func(val, arr.indexOf(val), arr));

    }
    return newArr;
}

const colorsUP = myMap(colors, function (color) {
    return color.toUpperCase();
})

const myMappedTodos = myMap(todos, function (todo) {
    return todo.priority;
})

const repeatedStrings = myMap(['a', 'b', 'c', 'd'], function (str, i) {
    return str.repeat(i);
});

//filter
const words = [
    'hello',
    'me',
    'jargin',
    'hklj',
    'sdfvlk',
    'yummy'
]

const highPriority = todos.filter(function (todo) {
    return todo.priority === 'High';

})

const containsVowel = function (word) {
    for (char of word) {
        if (isVowel(char)) return true;
    }
    return false;
}

const isVowel = function (char) {
    return 'aeiou'.indexOf(char) !== -1;
}

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function (word) {
    return !containsVowel(word);
})

//filter and map
const allCheckBoxes = document.querySelectorAll('input[type="checkbox"');


const checked = Array.from(allCheckBoxes).filter(function (box) {
    return box.checked;
})

const checkedText = checked.map(function (todo) {
    return todo.parentElement.innerText;
})
//chained map and filter function
function extractCompletedTodos() {
    const allCheckBoxes = document.querySelectorAll('input[type="checkbox"');
    return Array.from(allCheckBoxes)
        .filter(function (box) {
            return box.checked;
        })
        .map(function (todo) {
            return todo.parentElement.innerText;
        });
}
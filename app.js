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
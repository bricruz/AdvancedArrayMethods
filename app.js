const colors = ['teal', 'magenta', 'cyan']
function myForEach(arr, func) {
    for (el of arr) {
        func(el);
    }
}
myForEach(colors, function (color) {
    console.log(color.toUpperCase());
})
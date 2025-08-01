const path =require("path")


console.log(path.join("hello","java"));

console.log(path.join('folder', 'subfolder', 'file.txt'));
console.log(path.resolve('folder', 'file.txt'));
// ➤ /absolute/path/to/folder/file.txt

console.log(path.basename('/users/test/file.js'));
// ➤ file.js

console.log(path.dirname('/users/test/file.js'));
// ➤ /users/test

console.log(path.extname('index.html'));
// ➤ .html

console.log(path.parse('/home/user/file.txt'));

var first=path.join('/foo', '../bar', 'baz.txt');
var sec=path.resolve('foo', '/bar', 'baz');

console.log("first::"+first,"sec:"+sec);

console.log(__dirname)

console.log(__filename)

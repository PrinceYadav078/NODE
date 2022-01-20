const path=require('path')

// extname method is used to find out the extension name of the file

let ext=path.extname('E:\\WEB DEV\\NODE\\3.1_f1.txt')
console.log(ext)

let basename=path.basename('E:\\WEB DEV\\NODE\\3.1_f1.txt')
console.log(basename)

console.log(__dirname)// get the path of the current directory
console.log(__filename)// get the path of the file
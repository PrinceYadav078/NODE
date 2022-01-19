// Files System Module

//*******files************ /

const fs=require('fs')

// // we wll be reading writing updating and deleting files

// let content=fs.readFileSync('3.1_f1.txt')
// console.log("this is f1 data-> " +content)

// // writing to a file
// // writeFileSync method

// // if the file name that is passed does not exist then a new file will be automatically created with is name and the data will be written on that file

// fs.writeFileSync('3.2_f2.txt' , 'This data will be written on F2 file')

// fs.writeFileSync('3.3_f3.txt' , 'this data will be written on f3 file')
// console.log('Data Written')

// // append a file 

// // appendFileSync  method adds new data to a previously eritten file

// fs.appendFileSync('3.2_f2.txt', ' this is new data')

// deleting a file 
//unlinkSync method

// fs.unlinkSync('3.2_f2.txt')
// console.log('F2 deleted')



//***********Directories or Folders*******************//

// create a directory or folder
//mkdirSync method is used to create a new Directory or Folder

// fs.mkdirSync('myDirectory')
// console.log('Directory created')

// delete a directory
//rmdirSync method is used to remove a directory

// fs.rmdirSync('mydirectory')
// console.log('Directory Removed')

// to check whwther a directory exist or not
// existSync method is used for checking directory existence

// this return true or false based on whether the passed directory exists or not

// let doesexist=fs.existsSync('mydirectory')
// console.log(doesexist)

// stats of directory

// let statsofdirectory=fs.lstatSync('myDirectory')
// // console.log(statsofdirectory)

// //check directory or file
// console.log('isfile?',statsofdirectory.isFile())

// console.log('isDirectory?', statsofdirectory.isDirectory())


// read a directory

//readdirSync method is used to read a directory content

let folderpath='E:\\WEB DEV\\NODE\\myDirectory'
let foldercontent=fs.readdirSync('myDirectory')
console.log('Directory Content '+ foldercontent)
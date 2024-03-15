const fs = require('fs');

/* //reading files
fs.readFile('./docs/blog1.txt', (err, data)=> {
    if (err){
        console.log('err')
    }
    console.log(data.toString());
});


//writting files
fs.writeFile('./docs/blog1.txt', 'Hello, Worls, Nice to meet you', ()=>{
    console.log('file was written');

    fs.readFile('./docs/blog1.txt', (err, data)=> {
        if (err){
            console.log('err')
        }
        console.log(data.toString());
    });
});


// create and writ into a file
fs.writeFile('./docs/blog2.txt', 'Hello, this is a second file', ()=>{
    console.log('file2 was written');
});


//create and remove directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log('err');
        }
        console.log('Folder created !');
    })
}
else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted !')
    })
}
 */

//deleting file
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted !');
    })
}
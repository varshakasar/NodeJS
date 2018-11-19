var fs=require('fs');

//create a new folder

fs.mkdir('./newFolder',function(err,data){
	if(err){
		console.log('Error in folder creation');
	}
	else{
		console.log('Folder created successfully');
	}
})

//create file and write something in file

fs.writeFile('newFolder/newFile.txt', 'Welcome To FS Module', function(err,data){
	if(err){
		console.log('Error in file creation');
	}
	else{
		console.log('File created successfully');
	}
});

//read file data and print on console

fs.readFile('newFolder/newFile.txt','utf8', function(err,data){
	if(err){
		console.log('Error in reading file data');
	}
	else{
		console.log(data);
	}
});

//rename the file

fs.rename('newFolder/newFile.txt','newFolder/demoFile.txt', function(err,data){
	if(err){
		console.log('Error in rename file');
	}
	else{
		console.log('File rename successfully');
	}
});

//check file is exist or not

var f=fs.existsSync('./newFolder/demoFile.txt');
if(f == true){
	console.log('file exist');
}
else{
	console.log('file not exist');
}

//delete the file

fs.unlink('newFolder/demoFile.txt', function(err,data){
	if(err){
		console.log('Error in file deletion');
	}
	else{
		console.log('File deleted successfully');
	}
});

setTimeout(function(){
   // var response = query + "full!";
    //callback(response);
    console.log('HEllo');
  },3000);

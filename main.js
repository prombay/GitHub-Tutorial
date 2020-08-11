<!DOCTYPE html>
<html lang="en">
<head>
  <title>no title</title>
</head>
<body>
<script>
let cArray = [{size:'S',price: 10},{size:'M',price: 10},{size:'L',price: 10},{size:'XL',price: 12}];

let rArray = [{style: '7123',color: 'Red',price: 10},{style: '7123',color: 'Red',price: 12},{style: '7123',color: 'Green',price: 10},{style: '7123',color: 'Green',price: 12}];

console.log('there are '+cArray.length+" columns");
console.log('there are '+rArray.length+" rows \n");

let tArray = [];

for (let r = 0; r < rArray.length; r++){
  for (let c = 0; c < cArray.length; c++){ 
    console.log(r + ' '+ c +' '+ rArray[r].color +' '+cArray[c].size+' '+cArray[c].price);
    if (rArray[r].price === cArray[c].price){
		tArray.push({row: r,column: c, style: rArray[r].style,color: rArray[r].color,size: cArray[c].size,price: cArray[c].price});
	} else {
		tArray.push({row: r,column: c,style: 'blank'});
	}

    
    }  
    
  }
 console.log(tArray);
 console.log('================================ \n');
let r=0;
let c=0;

 	tArray.forEach(Array2 => {
 		console.log("row:"+Array2.row+"  column:"+Array2.column);
 	});
 	r++;
 	console.log('================================'+r+' \n');	
 	

//console.log(newArray.length); 
//console.log(newArray);
//console.log(newArray[0,0]);
//console.log(newArray[0,1]);
//console.log(newArray[0,2]);
//console.log(newArray[0,3]);
//console.log(newArray[1,0]);
//console.log(newArray[1,1]);
//console.log(newArray[1,2]);
//console.log(newArray[1,3]);






</script>


	// First - arrow function
	function getSum(...theArgs){
		return theArgs.reduce((previous,current)=>{
			return document.getElementById("ans").innerHTML = previous+current;	
		});
	}

	//Second - for of loop
	let array = [];			
	let newArray = [];

	function addToArray(){
		let addNumber = document.getElementById("word").value;
		if(addNumber!==""){
			array.push(addNumber);
			document.getElementById("word").value = "";
		}
		else 
				document.getElementById("myArrayShown").innerHTML="Please, enter the word!"
	}

	function showArray(){
		if (array.length!==0){
			for(let item of array){
				item = ` ${item.charAt(0).toUpperCase()}${item.slice(1)}`;						
				newArray.push(item);
			}
				newArray.toString()
				return document.getElementById("myArrayShown").innerHTML =  newArray;	
			}
		else 
			return document.getElementById("myArrayShown").innerHTML = "Error";				
	}

	//third - default parametrs
	let string; 
	
	function func(){	
		if (document.getElementById("str").value !="")
			string = document.getElementById("str").value;
		else string = undefined;

		getTypeOfEmptyString(string);
		document.getElementById("str").value = "";
	}

	function getTypeOfEmptyString(num = 7){
		return document.getElementById("emptyString").innerHTML = typeof num;
	}

	//Forth - math metods
	function getLog(){
		let number = document.getElementById("number").value;
		let numberInt = parseInt(number);

		return document.getElementById("log").innerHTML = Math.log1p(numberInt);
	}

		//fifth - template literals

	function templatLiter(){
		let a = 5;
		let b = 1;
		
		return document.getElementById("tempLit").innerHTML = 'ES' + 
		(a + b) + ' and\ntemplate literals!';
	}

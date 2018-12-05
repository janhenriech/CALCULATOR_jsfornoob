		  let a = 0;
		  
		  function add(){
			a = 10;
			n2 = document.getElementById("num").value;
			document.getElementById("num").value = "";
		  }
		   function minus(){
			a = 11;
			n2 = document.getElementById("num").value;
			document.getElementById("num").value = "";
		  }
		   function multiply(){
			a = 12;
			n2 = document.getElementById("num").value;
			document.getElementById("num").value = "";
		  }
		   function divide(){
			a = 13;
			n2 = document.getElementById("num").value;
			document.getElementById("num").value = "";
		  }
		  
		  function equals(){
			if (a == 10) {
				let n1 = document.getElementById("num").value;
				document.getElementById("num").value = parseInt(n2) + parseInt(n1);
			} else if (a == 11) {
				let n1 = document.getElementById("num").value;
				document.getElementById("num").value = parseInt(n2) - parseInt(n1);
			} else if (a == 12) {
				let n1 = document.getElementById("num").value;
				document.getElementById("num").value = parseInt(n2) * parseInt(n1);
			} else if (a == 13) {
				let n1 = document.getElementById("num").value;
				document.getElementById("num").value = parseInt(n2) / parseInt(n1);
			}
		  }
		  
		  function zero(){
			document.getElementById("num").value += 0;
		  }
		  function one(){
			document.getElementById("num").value += 1;
		  }
		  function two(){
		    document.getElementById("num").value += 2;
		  }
		  function three(){
			document.getElementById("num").value += 3;
		  }
		  function four(){
			document.getElementById("num").value += 4;
		  }
		  function five(){
			document.getElementById("num").value += 5;
		  }
		  function six(){
			document.getElementById("num").value += 6;
		  }
		  function seven(){
			document.getElementById("num").value += 7;
		  }
		  function eight(){
			document.getElementById("num").value += 8;
		  }
		  function nine(){
			document.getElementById("num").value += 9;
		  }
		  
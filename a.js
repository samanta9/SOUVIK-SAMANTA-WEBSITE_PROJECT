function ck(){
		 if(confirm("are you want to submit ?"))
					 {
						y();
					  
					 }
					 else{
					 alert("not submitted");
					 }
}
function y() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "aaaaaa") {
	  alert("login sucessfully");
   open("web.html");
  }
  else
  { alert("invalid user or password !");
  }
}
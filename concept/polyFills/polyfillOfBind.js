const name = {
    firstName : 'Rajat',
    lastName : 'Kashyap'
  }
  
  let printName = function (hometown,homeState){
  console.log(this.firstName +" "+ this.lastName+ " " + hometown+ " " + homeState);
  }
  
  let printMyName = printName.bind(name,"Allahabad");
  printMyName("Uttar Pradesh");


  Function.prototype.myBind  =  function (...args){
     let context = this
     let param = args.slice(1)
    return function(...args2){
        context.apply(args[0] , [...param , ...args2] )
    }
  }

  let printMyName2 = printName.myBind(name,"Allahabad");
  printMyName2("Uttar Pradesh");

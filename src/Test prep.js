function myfunction(){
    document.write('This is a paragraph');
}

let now = new Date();
let dayOfWeek = now.getDay();  // Sunday - Saturday : 0 - 6
if (dayOfWeek == 5) 
    {
        document.write("Have a nice weekend!");
    }
else {
        document.write("Have a nice working days");
     }

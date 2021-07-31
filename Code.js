const accessCode1= "SMOOTHIE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

class Clue {

   constructor() {
     
     this.greeting = createElement('h2');
     this.title = createElement('h2');
     
   }
   hide(){
     this.greeting.hide();
     
     this.title.hide();
   }
 
   display(){
     

   if(gameState===1){
      fill("white")
      
      
   
     }
     if(gameState===2){
      fill("white")
      textSize(15)
      text("C U T N I F O N", 700,150)
      fill("lightblue")
      text("Hint: Performs a particular task !!", 700,170)
      clue1.hide()
     }
     if(gameState===3){
      fill("white")
      textSize(15)
      text("A T E D A S B A", 100,250)
      fill("lightblue")
      text("Hint: Stores all information !!", 100,270)
     }

 }

}

// Dragin Slayer Game
var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;
while(slaying){
   if(youHit){
       console.log("You Hit");
       totalDamage += damageThisRound;
       if(totalDamage >=4){
           console.log("Congratulate on Slewing the Dragon");
           slaying = false;
       }
       else{
           youHit=Math.floor(Math.random()*2);
       }
   }
   else{
       console.log("Dragin Defeated you !!!");
   }
   slaying = false; 
}

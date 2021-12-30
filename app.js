 
    

    function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
      }    


    function generateRandomAccInteger(min, max) {
        return (Math.random() * (max - min) + min ).toFixed(1)
          }
         class Enemy{
        constructor(shipName){
            this.name = shipName
            this.hull = generateRandomInteger(3, 6)
            this.firepower =  generateRandomInteger(2, 4)
            this.accuracy =   generateRandomAccInteger(0.6,0.8)
            this.ranAcc = generateRandomAccInteger(0, 1)
        }
        updateStats(){
        
            
            let eneHull = document.createElement('div')// Enemy Hull
            eneHull = " Hull : " + this.hull 
            document.querySelector('.enemyStats').childNodes[0].nodeValue = eneHull
         

            let eneFP = document.createElement('div')   //Enemy FirePower
            eneFP = " FirePower : " + this.firepower  
            document.querySelector('.enemyStats').childNodes[2].nodeValue = eneFP

            let eneAcc = document.createElement('div')  //Enemy Accuracy
            eneAcc= "  Accuracy : " + this.accuracy 
            document.querySelector('.enemyStats').childNodes[4].nodeValue = eneAcc 
            
            console.log('%c ' + this.name + eneHull + eneFP + eneAcc , 'background-color: red; color: white;')
         
            if(this.hull <= 0){
            
            console.log("%c " + this.name + " has been destroyed!" , " color: red; font-size:3em;")
            }
        
        }
          
            eneAttack(){
                if(this.ranAcc > this.accuracy && this.hull > 0){
                    console.log("%c " + this.name + " has missed!" , " color: green; font-size:2em;")
                }else if (this.ranAcc <= this.accuracy && this.hull > 0){
                    console.log("%c " + "USS Schwarzenegger has been hit! " , " color: green; font-size:2em;")
                    ussSchwarzenegger.hull -= this.firepower
                    ussSchwarzenegger.ussStats()
                }
            }
        }

      let eneArr = [new Enemy("ene1"), new Enemy("ene2"), new Enemy("ene3"), new Enemy("ene4"), new Enemy("ene5"), new Enemy("ene6")]
     

        class USS{
            constructor(){
                this.hull = 20
                this.firepower = 5
                this.accuracy = .7
            }
            ussStats(){
                
                let pHull = document.createElement('div')
                pHull = "Hull : " + this.hull
                document.querySelector('.playerStats').firstChild.nodeValue = pHull //player hull

                let pFP = document.createElement('div')
                pFP = "FirePower : " + this.firepower
                document.querySelector('.playerStats').childNodes[1].nodeValue = pFP //player fire power

                let pAcc = document.createElement('div')
                pAcc = "Accuracy : " + this.accuracy
                document.querySelector('.playerStats').childNodes[3].nodeValue = pAcc // player accuracy 
            }
            attack(){
                for(let i = 0; i < eneArr.length; i++){
                    eneArr[i].updateStats();
                    let attBox = prompt("Type \"Attack\" to attack!").toLowerCase();
                    if(eneArr[i].hull > 0){
                        if(attBox == "attack" && eneArr[i].hull > 0 ){
                            eneArr[i].hull -= this.firepower;
                            eneArr[i].updateStats();
                            eneArr[i].eneAttack();
                            ussSchwarzenegger.ussStats()
                            console.log('%c Your Hull : ' + this.hull , 'font-style: italic; background: white; border: 1px solid grey; color: black;')
                    }
                    // if (this.hull < 20 && eneArr[i].hull > 0){
                    //     let attReBox = prompt("What would you like to do?(Attack or Retreat)").toLowerCase();
                    //     if(attReBox == "retreat" && eneArr.length > i){
                          
                    //         location.reload();
                    //     }
                    //      if (attReBox == "attack"){
                    //             eneArr[i].hull -= this.firepower;
                    //             eneArr[i].eneAttack();
                    //             eneArr[i].updateStats();
                    //             ussSchwarzenegger.ussStats();
                    //             console.log("Your Hull : " + this.hull)
                    //             }
                    // }

                    //NESTED FOR LOOP VERSION

                    for(let j = 0; eneArr[i].hull > 0; j++){//Checks to see if you attack and the enemy still has health, then asks to attack or retreat
                        if (this.hull < 20 && eneArr[i].hull > 0){
                            let attReBox = prompt("You've been hit! Attack or Retreat").toLowerCase();
                            if(attReBox == "retreat"){
                                eneArr = []
                              alert("You Lost! Restarting...")
                              console.log("You Lost! Restarting...")
                             
                                location.reload();
                            }
                             if (attReBox == "attack"){
                                    eneArr[i].hull -= this.firepower;
                                    eneArr[i].eneAttack();
                                    eneArr[i].updateStats();
                                    ussSchwarzenegger.ussStats();
                                    console.log('%c Your Hull : ' + this.hull , 'font-style: italic; background: white; border: 1px solid grey; color: black;')
                                    }
                        }
                        }
                     
                        if(eneArr[0].hull <= 0 && eneArr[1].hull <= 0 && eneArr[2].hull <= 0 && eneArr[3].hull <= 0 && eneArr[4].hull <= 0 && eneArr[5].hull <= 0){
                            console.log("%c " + "You Won!", "font-size:3em; color: yellow;")
                            let gameOver = prompt("Play Again?").toLowerCase();
                            if(gameOver == "yes"){
                                location.reload();
                            }
                        else if(this.hull <= 0){
                            let gameOver = prompt("Play Again?").toLowerCase();
                            if(gameOver == "yes"){
                                location.reload();
                            }
                        }
                        }
                    }
                }

            }
        }

        let ussSchwarzenegger = new USS()
      
        ussSchwarzenegger.ussStats()
        
        ussSchwarzenegger.attack()

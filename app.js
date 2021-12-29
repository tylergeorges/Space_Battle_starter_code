    // const playerStats = document.getElementsByClassName('playerStats')
    // let enemyStats = document.getElementsByClassName('enemyStats')
    // let enemyHull = document.getElementsByClassName('enemyStats')
    

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
            // let eneHull = "Hull : " + this.hull
            // document.body.innerHTML = document.body.innerHTML.replace('Hull : 6', eneHull)
            
            let eneHull = document.createElement('div')// Enemy Hull
            eneHull = " Hull : " + this.hull 
            document.querySelector('.enemyStats').childNodes[0].nodeValue = eneHull
         

            let eneFP = document.createElement('div')   //Enemy FirePower
            eneFP = " FirePower : " + this.firepower  
            document.querySelector('.enemyStats').childNodes[2].nodeValue = eneFP

            let eneAcc = document.createElement('div')  //Enemy Accuracy
            eneAcc= "  Accuracy : " + this.accuracy 
            document.querySelector('.enemyStats').childNodes[4].nodeValue = eneAcc 
            
            console.log(this.name + eneHull + eneFP + eneAcc)
         
            if(this.hull <= 0){
                eneArr.splice();
                console.log(this.name + " has been destroyed!")
            }
        }
         
            eneAttack(){
                if(this.ranAcc > this.accuracy && this.hull > 0){
                    console.log(this.name + " has missed!")
                }else if (this.ranAcc <= this.accuracy && this.hull > 0){
                    console.log("USS Schwarzenegger has been hit! ")
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
                document.querySelector('.playerStats').firstChild.nodeValue = pHull

                let pFP = document.createElement('div')
                pFP = "FirePower : " + this.firepower
                document.querySelector('.playerStats').childNodes[1].nodeValue = pFP

                let pAcc = document.createElement('div')
                pAcc = "Accuracy : " + this.accuracy
                document.querySelector('.playerStats').childNodes[3].nodeValue = pAcc
            }
            attack(){
                // const attBox = prompt("What would you like to do?(Attack or Retreat)")

                // if(attBox = "Attack" ){
                //     ussSchwarzenegger.attack()
                //  }else if(attBox = "retreat"){
                //      alert("You lost!")
                //  }


                for(let i = 0; i < eneArr.length; i++){
                    
                    // switch(attBox){
                    //     case "attack":
                    //         eneArr[i].hull -= this.firepower
                    //         console.log(`${eneArr[i].name} Hull : ${eneArr[i].hull}`);
                    //         eneArr[i].updateStats();
                    //     case eneArr[i].hull > 0:
                    //           attBox;
                    //           break;
                    //     case eneArr[i] <= 0:
                    //         eneArr.splice();
                    //     console.log(eneArr[i].name + " has been destroyed!")
                    //     attBox
                    //         break;
                    //     case "attack":
                    //             console.log(`Enemy 4 Hull : ${eneArr[3].hull -= this.firepower}`);
                    //             attBox;
                    //             break;
                    //     case "attack":
                    //             console.log(`Enemy 5 Hull : ${eneArr[4].hull -= this.firepower}`);
                    //             attBox;
                    //             break;
                    //     case "attack":
                    //             console.log(`Enemy 6 Hull : ${eneArr[5].hull -= this.firepower}`);
                    //             attBox;
                    //             break;
                    //     default:
                    //         attBox;
                    //     }
                    let attBox = prompt("What would you like to do?(Attack or Retreat)")

                    if(attBox == "attack" && eneArr[i].hull > 0){
                        eneArr[i].hull -= this.firepower;
                        // console.log(`${eneArr[i].name} Hull : ${eneArr[i].hull}`);
                        eneArr[i].updateStats();
                        eneArr[i].eneAttack();
                        ussSchwarzenegger.ussStats()
                        // prompt("What would you like to do?(Attack or Retreat)");
                    }
                    // switch(attBox){
                    //     case eneArr[0].hull > 0:
                    //     attBox = prompt("What would you like to do?(Attack or Retreat)")
                    //     break;
                    // }
                    // else if(eneArr[i].hull > 0){ 
                    //   prompt("What would you like to do?(Attack or Retreat)");
                    // }
                    //  if(attBox == "attack" && eneArr[i] <= 0){
                    //     eneArr[i].splice();
                    //     console.log(eneArr[i].name + " has been destroyed!")
                    //     // prompt("What would you like to do?(Attack or Retreat)")
                    // }
                    else {
                        eneArr[i].splice();
                        console.log(eneArr[i].name + " has been destroyed!")
                        // prompt("What would you like to do?(Attack or Retreat)")
                    }

                   
                }

            }
        }

        let ussSchwarzenegger = new USS()
        
        eneArr[5].updateStats()
        eneArr[4].updateStats()
        eneArr[3].updateStats()
        eneArr[2].updateStats()
        eneArr[1].updateStats()
        eneArr[0].updateStats()

        ussSchwarzenegger.ussStats()
        
        // function attack(){
        // return console.log(ene1.eneHull -= ussSchwarzenegger.firepower)
        // }
        ussSchwarzenegger.attack()

    //        let attBox = prompt("What would you like to do?(Attack or Retreat)")

    // //    for(let i = 0; i < eneArr.length; i++){
       
    //         if(attBox = "Attack" ){
    //            ussSchwarzenegger.attack()
    //         }else if(attBox = "retreat"){
    //             alert("You lost!")
    //         }
    //    }
        // switch(attBox){
        //     case "Attack":
        //     ussSchwarzenegger.attack();
        //     break;
        //     default:
        //     ussSchwarzenegger.attack();
        // }
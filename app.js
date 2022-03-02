homeplayer = document.querySelector(".home-player")
inputaddplayer = document.querySelector("#add-player-name")
btnaddplayer = document.querySelector(".btn-add-player-name")
playeringame = document.querySelector(".player-in-game")
playerstartgame = document.querySelector(".player-start-game")
gameall = document.querySelector(".game-all")

paD1 = document.querySelector(".paD1")
paD2 = document.querySelector(".paD2")
paD3 = document.querySelector(".paD3")
paD4 = document.querySelector(".paD4")
paD5 = document.querySelector(".paD5")
paD6 = document.querySelector(".paD6")
paD7 = document.querySelector(".paD7")
paD8 = document.querySelector(".paD8")

paN1 = document.querySelector(".paN1")
paN2 = document.querySelector(".paN2")
paN3 = document.querySelector(".paN3")
paN4 = document.querySelector(".paN4")
paN5 = document.querySelector(".paN5")
paN6 = document.querySelector(".paN6")
paN7 = document.querySelector(".paN7")
paN8 = document.querySelector(".paN8")

pa1 = document.querySelector(".pa1")
pa2 = document.querySelector(".pa2")
pa3 = document.querySelector(".pa3")
pa4 = document.querySelector(".pa4")
pa5 = document.querySelector(".pa5")
pa6 = document.querySelector(".pa6")
pa7 = document.querySelector(".pa7")
pa8 = document.querySelector(".pa8")

btnstart = document.querySelector(".btn-start")

overlay = document.querySelector(".game-finish")

card = document.querySelector(".card-play")

inp1 = document.querySelector("#input1")
inp2 = document.querySelector("#input2")
inp3 = document.querySelector("#input3")
inp4 = document.querySelector("#input4")
inp5 = document.querySelector("#input5")
inp6 = document.querySelector("#input6")
inp7 = document.querySelector("#input7")
inp8 = document.querySelector("#input8")

start = document.querySelector(".start")

turnnumber = document.querySelector(".turn-number")

countrestcard = document.querySelector(".count-rest-card")

was1 = document.querySelector(".was1")
was2 = document.querySelector(".was2")
was3 = document.querySelector(".was3")
was4 = document.querySelector(".was4")

function game() {

    player = 0
    gamestart = 0
    turn = 1
    click = 0
    countwas = 0
    ttcard = 96
    allcard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95]
    allplayer = ["o","o","o","o","o","o","o","o"]
    pl1 = 0
    pl2 = 0
    pl3 = 0
    pl4 = 0
    pl5 = 0
    pl6 = 0
    pl7 = 0
    pl8 = 0

    btnaddplayer.addEventListener("click", function() {

        if (inputaddplayer.value == '' ) {
            console.log("input vide")
            inputaddplayer.style.border = "5px solid red"
            setTimeout(function() {
                inputaddplayer.style.border = "none"
            }, 300)

        } else {

            /*divPA = document.createElement("div")
            divPA.className = "player-added"
            divPA.classList.add("paD" + nbpad)
            pPAN = document.createElement("p")
            pPAN.className = "player-added-name"
            divPA.appendChild(pPAN)
            pPAN.innerHTML = inputaddplayer.value
            divPC = document.createElement("div")
            divPC.className = "player-cross"
            divPC.classList.add("pa" + nbpad)
            divPA.appendChild(divPC)
            divC1 = document.createElement("div")
            divC1.className = "cross-1"
            divPC.appendChild(divC1)
            divC2 = document.createElement("div")
            divC2.className = "cross-2"
            divC1.appendChild(divC2)

            playeringame.appendChild(divPA)*/

            if (pl1 == 0) {
                paD1.classList.remove("none")
                paN1.innerHTML = inputaddplayer.value
                allplayer[0] = inputaddplayer.value
                pl1 = 1
                player += 1
            } else if (pl2 == 0) {
                paD2.classList.remove("none")
                paN2.innerHTML = inputaddplayer.value
                allplayer[1] = inputaddplayer.value
                pl2 = 1
                player += 1
            } else if (pl3 == 0) {
                paD3.classList.remove("none")
                paN3.innerHTML = inputaddplayer.value
                allplayer[2] = inputaddplayer.value
                pl3 = 1
                player += 1
            } else if (pl4 == 0) {
                paD4.classList.remove("none")
                paN4.innerHTML = inputaddplayer.value
                allplayer[3] = inputaddplayer.value
                pl4 = 1
                player += 1
            } else if (pl5 == 0) {
                paD5.classList.remove("none")
                paN5.innerHTML = inputaddplayer.value
                allplayer[4] = inputaddplayer.value
                pl5 = 1
                player += 1
            } else if (pl6 == 0) {
                paD6.classList.remove("none")
                paN6.innerHTML = inputaddplayer.value
                allplayer[5] = inputaddplayer.value
                pl6 = 1
                player += 1
            } else if (pl7 == 0) {
                paD7.classList.remove("none")
                paN7.innerHTML = inputaddplayer.value
                allplayer[6] = inputaddplayer.value
                pl7 = 1
                player += 1
            } else if (pl8 == 0) {
                paD8.classList.remove("none")
                paN8.innerHTML = inputaddplayer.value
                allplayer[7] = inputaddplayer.value
                pl8 = 1
                player += 1
            }

            inputaddplayer.value = ''
        }     
    })

    pa1.addEventListener("click", function() {
        paD1.classList.add("none")
        paN1.innerHTML = ''
        pl1 = 0
        allplayer[0] = "o"
        player -= 1
    }) 

    pa2.addEventListener("click", function() {
        paD2.classList.add("none")
        paN2.innerHTML = ''
        pl2 = 0
        allplayer[1] = "o"
        player -= 1
    })

    pa3.addEventListener("click", function() {
        paD3.classList.add("none")
        paN3.innerHTML = ''
        pl3 = 0
        allplayer[2] = "o"
        player -= 1
    })

    pa4.addEventListener("click", function() {
        paD4.classList.add("none")
        paN4.innerHTML = ''
        pl4 = 0
        allplayer[3] = "o"
        player -= 1
    })

    pa5.addEventListener("click", function() {
        paD5.classList.add("none")
        paN5.innerHTML = ''
        pl5 = 0
        allplayer[4] = "o"
        player -= 1
    })

    pa6.addEventListener("click", function() {
        paD6.classList.add("none")
        paN6.innerHTML = ''
        pl6 = 0
        allplayer[5] = "o"
        player -= 1
    })

    pa7.addEventListener("click", function() {
        paD7.classList.add("none")
        paN7.innerHTML = ''
        pl7 = 0
        allplayer[6] = "o"
        player -= 1
    })

    pa8.addEventListener("click", function() {
        paD8.classList.add("none")
        paN8.innerHTML = ''
        pl8 = 0
        allplayer[7] = "o"
        player -= 1
    })
    
    playerstartgame.addEventListener("click", function() {
        if (player >= 2) {

            if (allplayer[0] != "o") {
                inp1.innerHTML = allplayer[0]
            } else {
                inp1.classList.toggle("none")
            }

            if (allplayer[1] != "o") {
                inp2.innerHTML = allplayer[1]
            } else {
                inp2.classList.toggle("none")
            }

            if (allplayer[2] != "o") {
                inp3.innerHTML = allplayer[2]
            } else {
                inp3.classList.toggle("none")
            }

            if (allplayer[3] != "o") {
                inp4.innerHTML = allplayer[3]
            } else {
                inp4.classList.toggle("none")
            }

            if (allplayer[4] != "o") {
                inp5.innerHTML = allplayer[4]
            } else {
                inp5.classList.toggle("none")
            }

            if (allplayer[5] != "o") {
                inp6.innerHTML = allplayer[5]
            } else {
                inp6.classList.toggle("none")
            }

            if (allplayer[6] != "o") {
                inp7.innerHTML = allplayer[6]
            } else {
                inp7.classList.toggle("none")
            }

            if (allplayer[7] != "o") {
                inp8.innerHTML = allplayer[7]
            } else {
                inp8.classList.toggle("none")
            }

            

            homeplayer.classList.toggle("none")
            gameall.classList.toggle("none")
        }
    })

    btnstart.addEventListener("click", function() {

        function playerselector(firstplayer) {
            if (firstplayer == 1) {
                inp1.classList.toggle("player-active")
            } else if (firstplayer == 2) {
                inp2.classList.toggle("player-active")
            } else if (firstplayer == 3) {
                inp3.classList.toggle("player-active")
            } else if (firstplayer == 4) {
                inp4.classList.toggle("player-active")
            } else if (firstplayer == 5) {
                inp5.classList.toggle("player-active")
            } else if (firstplayer == 6) {
                inp6.classList.toggle("player-active")
            } else if (firstplayer == 7) {
                inp7.classList.toggle("player-active")
            } else if (firstplayer == 8) {
                inp8.classList.toggle("player-active")
            }
        }

        click += 1
        
        if (player > 1 && gamestart == 0) {
            start.innerHTML = "NEXT !"
            gamestart = 1
            firstplayer = Math.floor(Math.random() * player) + 1
            playerselector(firstplayer)
            turnnumber.innerHTML = turn
            roll = Math.floor(Math.random() * allcard.length)

            if (allcard[roll] == 63) {
                countwas += 1
            } else if (allcard[roll] == 64) {
                countwas += 1
            } else if (allcard[roll] == 65) {
                countwas += 1
            } else if (allcard[roll] == 66) {
                countwas += 1
            }

            card.src = "img/carte/carte-(" + allcard[roll] + ").jpg"
            allcard.splice(roll, 1)

        } else if (gamestart == 1) {
            playerselector(firstplayer)

            if (firstplayer == player) {
                firstplayer = 1
            } else {
                firstplayer += 1
            }

            playerselector(firstplayer)
            turnnumber.innerHTML = turn
            roll = Math.floor(Math.random() * allcard.length)

            if (allcard[roll] == 63) {
                countwas += 1
            } else if (allcard[roll] == 64) {
                countwas += 1
            } else if (allcard[roll] == 65) {
                countwas += 1
            } else if (allcard[roll] == 66) {
                countwas += 1
            }

            card.src = "img/carte/carte-(" + allcard[roll] + ").jpg"
            allcard.splice(roll, 1)
        } else {
            console.log("useless")
        }

        if (click == player) {
            click = 0
            turn += 1
        }

        countrestcard.innerHTML = allcard.length - 1

        if (allcard.length > ttcard / 2 ) {
            countrestcard.style.color = "green"
        } else if (allcard.length > ttcard / 9 ) {
            countrestcard.style.color = "orange"
        } else if (allcard.length > ttcard / 15 ) {
            countrestcard.style.color = "red"
        } else if (allcard.length == 1) {
            countrestcard.style.color = "black"
        }

        if (allcard.length == 0) {
            countrestcard.innerHTML = "0"
        }

        if (countwas == 1) {
            was1.style.opacity = 1
        } else if (countwas == 2) {
            was2.style.opacity = 1
        } else if (countwas == 3) {
            was3.style.opacity = 1
        } else if (countwas == 4) {
            was4.style.opacity = 1
        }

        if (allcard.length == 0) {
            card.src = "img/background/dos_carte.jpg"
            btnstart.style.display = "none"
            overlay.classList.toggle('none')
        }
    })

}

game();
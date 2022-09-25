let dragonLoc = Math.floor(Math.random() * 15)
let treasureLoc = Math.floor(Math.random() * 15)
let win = 0;
let lose = 0;
let click = 0;
let kills = 0;
let array = []

const dice = () => {
    let roll = Math.floor(Math.random() * 15)
   
   if (!array.indexOf(roll)){
    dice()
   } else {
    array.push(roll)
    treasure(roll)
    
   }
    
    
}

const treasure = (num) => {
    click++
    if (treasureLoc === dragonLoc) {
        treasureLoc = Math.floor(Math.random() * 15)
    } 
    if (click >= 7) {
        document.getElementById("story").innerHTML = '<img   class="popup dragon" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Dragon.jpg" alt="red dragon" width="300px" height="400px">' + "The dragon has found you, you die"
        document.getElementById('story').style.color = "red"
        document.getElementById('story').style.backgroundColor = "black"
        lose++
        setTimeout(() => {reset()}, 2000)
    }
    
    if (num == dragonLoc) {
        document.getElementById(num.toString()).innerHTML= '<img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Dragon.jpg" alt="red dragon" width="60px" height="80px">'
        document.getElementById("story").innerHTML = '<img   class="popup dragon"  src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Dragon.jpg" alt="red dragon" width="300px" height="400px">' + "You have found the dragon, you die"
        
        document.getElementById('story').style.color = "red"
        document.getElementById('story').style.backgroundColor = "black"
        lose++
        
        setTimeout(() => {reset()}, 2000)
        
    } else if (num == treasureLoc) {
        document.getElementById(num.toString()).innerHTML = '<img src="https://www.sacredheartlynd.org/school/wp-content/uploads/2018/03/Treasure-PNG-Images.png" alt="treasure" width="60px" height="80px">'
        document.getElementById("story").innerHTML = '<img class="popup" src="https://www.sacredheartlynd.org/school/wp-content/uploads/2018/03/Treasure-PNG-Images.png" alt="treasure" width="300px" height="400px">' + "You have found the treasure, you win"
        win++
        
        setTimeout(() => {reset()}, 2000)
    } else {
        document.getElementById(num.toString()).innerHTML = "<img src='https://media.istockphoto.com/vectors/blood-splash-drop-paint-on-black-background-vector-id1308070006?k=20&m=1308070006&s=612x612&w=0&h=ZoGAI3K1nw9QJzhFbrRJDzc4vy5PZ05cbv5Zf_0fmuE=' width='100px'>"
        kills++
    }
    
    document.getElementById("won").innerHTML = "Won: " + win;
    document.getElementById("lost").innerHTML = "Lost: " + lose
    document.getElementById("kills").innerHTML = "Kill Count: " + kills
    
       
}

function reset() {
    document.getElementById("story").innerHTML = "Kill the Goblins, Find their Treasure!"
    document.getElementById("story").style.color = "white"
    document.getElementById("story").style.backgroundColor = "transparent"
    click = 0
    kills = 0
    array = []
    document.getElementById("kills").innerHTML = "Kill Count: 0"
    dragonLoc = Math.floor(Math.random() * 15)
    treasureLoc = Math.floor(Math.random() * 15)
    let selections = document.getElementsByClassName("selection")
   for (let i = 0; i < selections.length; i++) {
    selections[i].innerHTML = "<img src='https://static.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest/top-crop/width/360/height/450?cb=20171212204756' width='80px'>"
   }
}
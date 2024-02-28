class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
        this.rank = 0;
        this.score  = 0;
        this.fuel = 185;
    }
    addPlayer(){
        var playerIndex = "players/player" + this.index
        if(this.index === 1){
            this.positionX = width/2 -100
        }
        else
        {
           this.positionX = width/2 +100
        }
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: this.positionY,
            score: this.score,
            rank: this.rank
        })
    }
    getCount(){
        var playerCountRef = database.ref("playerCount")
        playerCountRef.on("value",data=>{
            playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).update({
            positionX:this.positionX,
            positionY:this.positionY,
            rank: this.rank,
            score:this.score
        })
    }

    static getPlayersInfo(){
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value", data=>{
            allPlayers = data.val();
        })
    }
}
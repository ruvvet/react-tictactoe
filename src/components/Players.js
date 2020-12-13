export default function Players({players, playerHighlight }) {
console.log(players[0].score)
const playersScores = [];

for (let i=0; i<2; i++){
    playersScores.push( <div className ={`player-score ${playerHighlight[i]}`} key={`player-${i}`} ><span className = "player-text"> Player {players[i].player}:</span> {players[i].score} </div>)
}

return <div className = "scores">{playersScores}</div>
}
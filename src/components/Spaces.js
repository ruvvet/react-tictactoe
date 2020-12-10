import './spaces.css';

export default function Spaces({ handleClick, board }) {
  //id={`${i-i}${i%3}`}>

  const spaces = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      spaces.push(
        <button
          className="space"
          onClick={() => {
            handleClick(x,y);
          }}
          key={`space-${x}${y}`}
          id={`${x}${y}`}
        >
          {/* here we are reflecting the state of the virtual board by index */}
          <div className="print">{board[x][y]}</div>
        </button>
      );
    }
  }

  return <div className="board">{spaces}</div>;
}

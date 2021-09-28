import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { GrAdd } from "react-icons/gr";

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 9, 0],
  ]);
  const [colTraced, setColTraced] = useState({
    "1r1c": true,
  });
  const [error, setError] = useState("");

  const addCol = (rowI) => {
    var newMaze = [...maze];
    if (newMaze[rowI].length < 28) {
      newMaze[rowI].push(0);
      setMaze(newMaze);
    }
  };
  const toggleCol = (rowI, colI) => {
    var newMaze = [...maze];
    var col = maze[rowI][colI];
    if (col === 0) col = 1;
    else if (col === 1) col = 9;
    else if (col == 9) col = 0;
    newMaze[rowI][colI] = col;
    setMaze(newMaze);
  };
  return (
    <>
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}
      <div className="maze">
        {maze.map((row, rowI) => (
          <div className="maze__row" key={rowI}>
            {row.map((col, colI) => {
              return (
                <div
                  onClick={() => toggleCol(rowI, colI)}
                  key={colI}
                  className={`maze__col 
                ${col === 0 && "maze__col-path"} 
                ${col === 1 && "maze__col-obstacle"} 
                ${col === 9 && "maze__col-end"} 
                ${colTraced[`${rowI}r${colI}c`] && "maze__col-current"}`}
                />
              );
            })}

            <GrAdd className="maze__add" onClick={() => addCol(rowI)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

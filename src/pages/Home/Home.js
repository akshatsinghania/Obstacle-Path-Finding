import React, { useEffect, useState } from "react";
import {
  Alert,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./Home.css";
import { GrAdd } from "react-icons/gr";

const Home = () => {
  const [size, setSize] = useState({ row: 4, col: 4 });
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

  const changeCol = (value) => {
    if (value > 12) setError("Max column size is 12");
    else setSize({ ...size, col: value });
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
  function createAndFillTwoDArray(rows, columns, defaultValue) {
    return Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => defaultValue)
    );
  }
  useEffect(() => {
    setMaze(createAndFillTwoDArray(size.row, size.col, 0));
  }, [size]);
  return (
    <>
      <Container className="size">
        <FloatingLabel controlId="floatingInput" label="Row Size">
          <Form.Control
            type="number"
            value={size.row}
            onChange={(e) => setSize({ ...size, row: e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Column Size">
          <Form.Control
            type="number"
            value={size.col}
            onChange={(e) => changeCol(e.target.value)}
          />
        </FloatingLabel>
      </Container>
      {error && (
        <Alert
          className="w-25"
          variant="danger"
          onClose={() => setError("")}
          dismissible
        >
          <Alert.Heading>{error}</Alert.Heading>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

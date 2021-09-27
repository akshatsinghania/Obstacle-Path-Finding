import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [maze, setMaze] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [colTraced, setColTraced] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setColTraced([[1, 1]]);
    }, 3000);
  }, []);
  return (
    <Container className="maze">
      {maze.map((row, rowI) => (
        <Row>
          {row.map((col, colI) => {
            let current = false;
            colTraced.findIndex((col) => {
              current = col[0] == rowI && col[1] == colI;
            });
            console.log(current);
            return (
              <Col className={`maze__col ${current && "maze__col-current"}`}>
                {col}
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
  );
};

export default Home;

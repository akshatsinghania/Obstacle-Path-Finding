const findShortestPath = () => {};

function shortestPath(maze, i = [0, 0], cnt = 1) {
  if (i[1] < 0 || i[0] < 0 || i[0] >= maze.size() || i[1] >= maze[0].size())
    return -1;
  current = maze[i[0]][i[1]];
  left = [i[0], i[1] - 1];
  right = [i[0], i[1] + 1];
  bottom = [i[0] + 1, i[1]];
  top = [i[0] - 1, i[1]];
  if (current == 1) return -1;
  if (current == 9) return cnt++;

  return 0;
}

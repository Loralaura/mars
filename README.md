# 🚀 Welcome to MarsRover! 🚀

---

MarsRover is designed to help you co-ordinate rover based missions safely. Set your plateau size, place your rover, and send them off with a set of instructions.

---

## Getting Started

- To launch the program, type ` npm start`

- You will be prompted to enter the size of your plateau. Please enter two numbers (the X and Y co-ordinates), with a space in between. For example `5 5`

- Enter your first rover's position, (two numbers seperated by a space) and orientation (**N** for north,** S** for south, **E** for east,** W** for west). For example `1 2 E`

- Enter your instructions for the rover you just initialised, using **M** to move forward, **L** to turn left, and **R** to turn right. Instructions should be entered with no spaces inbetween. EG `MMMRMMLM`

- Now you may initialise another rover, or type `end `to print the results and end the exploration.

- After ending, you may press **enter** to restart the program.

---

## FAQ

#### What happens if I accidentally drive off the edge of the plateau?

> Not to worry, if your rover reaches the edge, it will not continue out of bounds and will read the next safe instruction instead.

#### What happens if a rover tries to enter the position of another rover?

> The rover will ignore an instruction if it were to crash, and instead follow the next safe instruction in the queue.

---

## Authors

- [Laura Robinson](https://github.com/Loralaura)

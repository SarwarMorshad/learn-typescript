// abstraction
/* 
1. interface
2. abstract class
*/

// 1. interface
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements MediaPlayer {
  play() {
    console.log("Playing music...");
  }
  pause() {
    console.log("Pausing music...");
  }
  stop() {
    console.log("Stopping music...");
  }
}

const myMusicPlayer = new MusicPlayer();
myMusicPlayer.play();

// 2. abstract class
abstract class Vehicle {
  abstract startEngine(): void;
  abstract stopEngine(): void;
}

class Car extends Vehicle {
  startEngine() {
    console.log("Starting the car engine...");
  }
  stopEngine() {
    console.log("Stopping the car engine...");
  }
}

const myCar = new Car();
myCar.startEngine();
myCar.stopEngine();

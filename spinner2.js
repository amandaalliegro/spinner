process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|  ','\r/   ','\r-   ','\r\\   ','\r|   '];

const rotateSpin = function(spinner) {
  let time = 100;
  spinner.push("\n");
  for (let spinPos in spinner) {
    setTimeout(() => {
      process.stdout.write(spinner[spinPos]);
    }, time);
    time += 200;
  }
};

rotateSpin(spinner);
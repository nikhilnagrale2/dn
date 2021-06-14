var Volume = {
  pi: 3.1412,
  radius: 12,
  height: 12,
  findVolume: function () {
    return pi * this.radius * this.radius * this.height;
  },
};

console.log(Volume.findVolume());

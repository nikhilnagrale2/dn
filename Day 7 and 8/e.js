var Volume = {
  pi: 3.1412,
  findVolume: function (radius, height) {
    return this.pi * radius * radius * height;
  },
};

console.log(Volume.findVolume(13, 15));

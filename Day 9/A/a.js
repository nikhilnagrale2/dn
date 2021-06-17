const OS1 = {
  OSname: "Windows",
  Flavour: "Windows 10",
  getOSNname: function () {
    console.log("OS name is " + this.OSname);
  },
  getProduct: function (a, b) {
    console.log("OS name is " + this.OSname + ". Sum is " + (a + b));
  },
};

const OS2 = {
  OSname: "Linux",
  Flavour: "Ubuntu",
};

OS1.getOSNname();

OS1.getOSNname.call();

OS1.getOSNname.call(OS2);

OS1.getProduct.call(OS2, 1, 4);

OS1.getProduct.apply(OS2, [1, 5]);

const fun = OS1.getProduct.bind(OS2, 5, 9);
console.log(fun);
fun();

const server1 = {
  serverName: "Google",
};

const server2 = {
  serverName: "Bing",
};

function getInvite() {
  console.log(this);
}

getInvite.call(server2);

class Phone {
  battery = 0;
  screen = 0;
  signal = 0;

  constructor(name = "") {
    this.name = name;
  }

  connectWifi() {
    //logic to connect to wifi
    if (this.signal >= 50 && this.battery > 5) {
      this.wifiConnectSuccess();
    } else {
      this.wifiConnectFailed();
    }
  }

  wifiConnectSuccess() {
    console.log("Connect Successfully");
  }
  wifiConnectFailed() {
    console.log("Connect Failed");
  }
}

const iphone = new Phone("Iphone 16 Pro");
iphone.battery = 50;
iphone.signal = 50;
console.log(iphone.name);
iphone.connectWifi();

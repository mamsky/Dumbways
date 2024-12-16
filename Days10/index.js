// // const fetchData = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const success = true;
// //     if (success) {
// //       resolve("Data Fetching");
// //     } else {
// //       reject("Error Fetching data");
// //     }
// //   }, 5000);
// // });

// // async function fetchDataAsync() {
// //   fetchData
// //     .then((res) => {
// //       console.log(res);
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// // }

// // fetchDataAsync();
// // -----------------------------------------------------------------------------
// //synccronus
// // console.log("Start");

// // const fetchData = () => {
// //   const data = "Data Fetch";
// //   return data;
// // };

// // const res = fetchData();
// // console.log(res);

// // console.log("end");

// //asyncronus
// // console.log("Start");

// // const fetchData = () => {
// //   setTimeout(() => {
// //     const datas = "data";
// //     console.log(datas);
// //   }, 3000);
// // };
// // fetchData();

// // console.log("end");
// // -----------------------------------------------------------------------
// // callback
// // const sayHello = (name) => {
// //   console.log("hello ", name);
// // };

// // const greeting = (name, callback) => {
// //   return callback(name);
// // };

// // greeting("poy", sayHello);

// // ---------------------------------------------------------------------------
// // callback problem
// // setTimeout(() => {
// //   console.log("Callback Hallo World");
// // }, 1000);

// // const proccesOne = () => {
// //   console.log("Proses 1");
// // };
// // const proccesTwo = () => {
// //   console.log("Proses 2");
// // };
// // const proccesThree = () => {
// //   console.log("Proses 3");
// // };

// // setTimeout(() => {
// //   proccesOne();
// //   setTimeout(() => {
// //     proccesTwo();
// //     setTimeout(() => {
// //       proccesThree();
// //     }, 2000);
// //   }, 3000);
// // }, 5000);

// // -------------------------------------------------------------
// // async
// // const proccesOne = () => {
// //   setTimeout(() => {
// //     console.log("Proses 1");
// //   }, 5000);
// // };
// // const proccesTwo = () => {
// //   setTimeout(() => {
// //     console.log("Proses 2");
// //   }, 2000);
// // };
// // const proccesThree = () => {
// //   setTimeout(() => {
// //     console.log("Proses 3");
// //   }, 3000);
// // };

// // coba menggunakan async
// // const mutipleAync = async () => {
// //   proccesOne();
// //   proccesTwo();
// //   proccesThree();
// // };

// // mutipleAync();
// // ----------------------------------------------------------------------
// // Promise
const proccesOne = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Proses 1");
      //   let data = "Hello";
      resolve();
    }, 5000);
  });
};

const proccesTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Process 2";

      const err = false;
      !err ? resolve(data) : reject("Fails in process 2");
    }, 2000);
  });
};

const proccesThree = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Proses 3");
      resolve();
    }, 3000);
  });
};

proccesOne()
  .then(() => {
    return proccesTwo();
  })
  .then(() => {
    return proccesThree();
  })
  .catch((error) => {
    console.error(error);
  });

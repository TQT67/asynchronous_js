// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name: number, call_production: any) => {
//   setTimeout(function () {
//     console.log(`${stocks.Fruits[fruit_name]} was selected`);

//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
//         setTimeout(() => {
//           console.log("start the machine");
//           setTimeout(() => {
//             console.log(`Ice cream placed on ${stocks.holder[1]}`);
//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} as toppings`);
//               setTimeout(() => {
//                 console.log("serve Ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// -----------------Sử dụng Promises-------------------------
// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"],
// };

// let is_shop_open = true;

// let order = (time: number, work: any) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//   .then(() => {
//     return order(0, () => console.log("production has started"));
//   })
//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })
//   // step 4
//   .then(() => {
//     return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`));
//   })
//   // step 5
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })
//   // step 6
//   .then(() => {
//     return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`));
//   })
//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })
//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   });

// -----------------Sử dụng async/await---------------

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
function time(ms: number) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}
async function production() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("production has started");

    await time(2000);
    console.log("fruit has been chopped");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left");
  }
}

production();

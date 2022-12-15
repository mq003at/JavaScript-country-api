document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  /*
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

  // const printNum = () => {
  //   for (let i = 0; i <= 100; i++) {
  //     setTimeout(() => console.log("1. ", i), 1);
  //   }
  // };

  // printNum();

  /*
2. Given the array below:
myArr = ['12-24-2014', '09-2022-23', '12-30-2021', '08-02-2021', '07-15-2018', '2019-12-14', '2022-14-12']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '08-02-2021', '15-07-2018', '14-12-2019', '14-12-2022'] . 
You only need to produce the same array as expected result, no need to consider other 
possibility.
 */

  let myArr = ["12-24-2014", "09-2022-23", "12-30-2021", "08-02-2021", "07-15-2018", "2019-12-14", "2022-14-12"];
  const fixDate = (array) => {
    /* provide your code here */
    return array.map((elem) => {
      let arr = elem.split("-");
      return arr[1] + "-" + arr[0] + "-" + arr[2];
    });
  };
  let newArr = fixDate(myArr);
  console.log("2. ", newArr);

  /*
3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds
*/
  const dateFrom = new Date(500000);
  const dateTo = new Date(1000000000);
  const counter = (from, to) => {
    /* provide your code here */
    const difference = (to - from) / 1000;
    const day = Math.floor(difference / (24 * 3600));
    const hour = Math.floor(difference / 3600 - day * 24);
    const minute = Math.floor(difference / 60 - day * 24 * 60 - hour * 60);
    const second = difference - day * 24 * 3600 - hour * 3600 - minute * 60;
    return `${day} days ${hour} hours ${minute} minutes ${second} seconds.`;
  };
  const timer = counter(dateFrom, dateTo);
  console.log(timer);

  /* 
4. Check the url and read documentation: https://restcountries.com
- Write a function to get all countries, sorted in alphabetical order
- Write a function to find one country based on the search input
The data fetched from url should be displayed in index.html.
*/

  const getAllCountries = () => {
    /* provide your code here */
    console.log("4. List of countries: ");

    let countryList = [];
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        for (let reg in res) {
          countryList.push(res[reg].name);
        }
        countryList.sort((a, b) => b - a);
        countryList.forEach((country) => {
          const divGrid = document.createElement("div");
          divGrid.innerHTML = `<p>${country.common}</p>`;
          document.getElementById("grid-area").appendChild(divGrid);
        });

        console.log("list", countryList);
      });
  };

  const getSingleCountry = () => {
    /* provide your code here */
    const search = document.getElementById("input-form").value;
    fetch(`https://restcountries.com/v3.1/name/${search}`)
      .then(res => res.json())
      .then(res => {
        console.log(res.status)
        if (res.status === 404) document.getElementById("result").innerHTML = "No result found."
        else {
          console.log(res[0])
          const result = document.getElementById("result");
          res.forEach(result => {
            const divNode = document.createElement("div");
            divNode.className = "result-box " + result.name.common;
            const imgNode = document.createElement("img")
            imgNode.src = result.flags.png;
            const nameNode = document.createElement("p");
            nameNode.innerHTML = "Country: " + result.name.common + ". Region: " + result.region +  ".";
            divNode.append(imgNode, nameNode)
            // result.appendChild(divNode)
            document.getElementById("result").appendChild(divNode)
          })

          // document.getElementById("result-wrap").appendChild(result)

        }
      })
  };

  getAllCountries();
  document.getElementById("submit-form").addEventListener("click", getSingleCountry)

  /*
5. Provide logic for function generateNewFolderName, 
which receive an array as argument. Everytime the function gets called,
it should check for folder name. If the folder named 'New Folder' 
does not exist, it should add the name 'New Folder' to array.
If folder 'New Folder' exists, it should add 'New Folder (1)' to array. 
If 'New Folder (1)' exists, it should add 'New Folder (2)'
to array, and so on.
*/

  const generateNewFolderName = (existingFolders) => {
    /*  provide your code here */
    if (existingFolders.length == 0) existingFolders.push("New Folder");
    else existingFolders.push(`New Folder (${existingFolders.length})`);
  };

  let folder = [];
  generateNewFolderName(folder);
  generateNewFolderName(folder);
  generateNewFolderName(folder);
  generateNewFolderName(folder);
  console.log("5. ", folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']

  /* 
6. Complete class Book:
- class Book should have 3 properties: title (read-only, must be a string but cannot be empty), 
cost (private, must be positive number) and profit (private, positive number > 0 and =< 0.5)
(error should be thrown if data is not valid)
- give the logic to get book's price and profit separately.
- give the logics to increase and decrease the price with a certain amount 
- give the logic to calculate price based on cost and profit. For example: cost 14, profit 0.3 
=> expected price is 20.

Complete class TaxableBook: 
- inherit Book, but have 1 more private parameter in the constructor: taxRate. 
- give the logic to calculate price with taxRate. For example: 
cost 14, profit 0.3 , tax 24% => expected price is 30.43
*/

  console.log("\n6.");
  class Book {
    #title;
    #cost;
    #profit;
    constructor(t, c, p) {
      if (p <= 0 || p > 0.5) console.log("Wrong profit.");
      else {
        this.#title = t;
        this.#cost = c;
        this.#profit = p;
      }
    }

    get profit() {
      return undefined;
    }

    get cost() {
      return undefined;
    }

    get gProfit() {
      return this.#profit;
    }

    get gCost() {
      return this.#cost;
    }

    get title() {
      return this.#title;
    }

    set increaseCost(c) {
      this.#cost = this.#cost + c;
    }

    set decreaseCost(c) {
      this.#cost = this.#cost - c;
    }

    get estimatePrice() {
      return `Price should be around ${this.#cost / (1 - this.#profit)}`;
    }
  }

  // JS cannot inherit private members, so we need a get?
  class TaxableBook extends Book {
    /* provide your code here */
    #taxRate;

    constructor(title, cost, profit, taxRate) {
      super(title, cost, profit);
      this.#taxRate = taxRate;
    }

    get priceWithTax() {
      return `With tax, price will be ${Math.round(this.gCost / (1 - this.gProfit - this.#taxRate / 100))}`;
    }
  }

  const book1 = new Book("The Power of Habits", 14, 0.3);
  book1.profit = 2;
  console.log(book1.title, book1.cost, book1.profit);
  book1.changeCost = 0.5;
  console.log(book1.estimatePrice);
  const book2 = new TaxableBook("The Power of Habits", 14, 0.3, 24);
  console.log(book2.priceWithTax);
});

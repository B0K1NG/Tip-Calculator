  /* 
  🌟 APP: Tip Calculator

  These are the 3 functions you must use 👇
  =========================================
  calculateBill()
  increasePeople()
  decreasePeople()

  These functions are hard coded in the HTML. So, you can't change their names.

  These are all the DIV ID's you're gonna access to 👇
  ========================================================
  #1 ID 👉 'billTotalInput' = User input for bill total
  #2 ID 👉 'tipInput' = User input for tip
  #3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
  #4 ID 👉 'perPersonTotal' = Total dollar value owed per person
  */

  // bill input, tip input, number of people div, and per person total div
  const billTotal = document.getElementById('billTotalInput');
  const tipInput = document.getElementById('tipInput');
  const numberOfPeopleDiv = document.getElementById('numberOfPeople');
  const perPersonTotalDiv = document.getElementById('perPersonTotal');


  // Geting number of people from number of people div
  let numberOfPeople = Number(numberOfPeopleDiv.innerText)

  // ** Calculating the total bill per person **
  const calculateBill = () => {
    // geting bill from user input & convert it into a number
    const bill = Number(billTotal.value);

    // geting the tip from user & convert it into a percentage (divide by 100)
    const tipPercentage = Number(tipInput.value) / 100;

    // geting the total tip amount
  const tipAmount = bill * tipPercentage;

    // calculating the total (tip amount + bill)
  const totalAmount = tipAmount + bill;

    // calculating the per person total (total divided by number of people)
  const perPersonTotal = totalAmount / numberOfPeople;

    // updating the perPersonTotal on DOM & show it to user
    //.tofixed(2) Leaves 2 numbers after the decimal point
    // .toLocaleString('en-US')} converts the number to a string and adds a comma to the number
    perPersonTotalDiv.innerText = `$${perPersonTotal.toLocaleString('en-US')}`
  }

  // ** Splits the bill between more people **
  const increasePeople = () => {
    // incrementing the amount of people
  numberOfPeople += 1;
    // updating the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

    // calculating the bill based on the new number of people
  calculateBill();
  }

  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
      alert(`Heyo! You can't go below 1 person!`)
      // return is necessary when using alert
      return // not necessary when using throw it creates an error
    }

    // decrementing the amount of people
    numberOfPeople -=1;

    // updating the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople;

    // calculating the bill based on the new number of people
    calculateBill()
  }
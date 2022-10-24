const tableBody = document.getElementById("table-body");

let flights = [
  {
    time : "08:11",
    destination : "OMAN",
    flight : "OX 203",
    gete : " A 01",
    remarks : "ON TIME"
  },
  {
    time : "08:11",
    destination : "OMAN",
    flight : "OX 203",
    gete : " A 01",
    remarks : "ON TIME"
  },
  {
    time : "08:11",
    destination : "OMAN",
    flight : "OX 203",
    gete : " A 01",
    remarks : "ON TIME"
  },
  {
    time : "08:11",
    destination : "OMAN",
    flight : "OX 203",
    gete : " A 01",
    remarks : "ON TIME"
  }
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYTED", "CANCELLED"]
let hour = 15;



const populateTable = () => {
  flights.forEach((flight) => {
    //flight : flights 안의 각 객체들
    const tableRow = document.createElement("tr");

    for(const flightDetail in flight){
      //각 객체들의 값 순회. 
      const tableCell = document.createElement("td");

      const word = Array.from(flight[flightDetail]);
      //word : 각 값들을 split함. 

      word.forEach((letter, index) => {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      });

      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  });
}

populateTable();

const generateRandomLetter = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

const generateRandomNumber = (maxNumber) => {
  const numbers = "0123456789";
  if(maxNumber){
    const newNumbers = numbers.slice(0, maxNumber + 1);
    return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
  }

  return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

const generateTime = () => {
  let displayHour = hour;

  if(hour < 24){
    hour++;
  }
  if(hour >= 24){
    hour = 1;
    displayHour = hour;
  }
  if(hour < 10){
    displayHour = "0" + hour;
  }

  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

const shuffleUp = () => {
  flights.shift();
  flights.push({
    time : generateTime(),
    destination : destinations[Math.floor(Math.random()* destinations.length)],
    flight : generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
    gete : generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
    remarks : remarks[Math.floor(Math.random()* remarks.length)]
  });
  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffleUp, 5000);
















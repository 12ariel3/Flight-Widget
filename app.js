const tableBody = document.getElementById("table-body");


let flights = [

    {
        time:"23:15",
        destination:"LA QUIACA",
        flight:"KK  218",
        gate:"F  56",
        remarks:"ON TIME"
    },
    {
        time:"05:44",
        destination:"CATAN",
        flight:"IR  816",
        gate:"U  97",
        remarks:"ON TIME"
    },
    {
        time:"08:34",
        destination:"BOQUITA",
        flight:"JR  134",
        gate:"E  11",
        remarks:"CANCELLED"
    },
    {
        time:"22:55",
        destination:"TU COLA",
        flight:"GR  290",
        gate:"W  76",
        remarks:"DELAYED"
    },
    {
        time:"15:09",
        destination:"CUCULA",
        flight:"HO  761",
        gate:"C  64",
        remarks:"ON TIME"
    },
    {
        time:"18:47",
        destination:"CHIRIPA",
        flight:"NM  973",
        gate:"Q  42",
        remarks:"CANCELLED"
    },

]

const destination = ["LA QUIACA", "CHIRIPA", "CATAN", "LA SALADA", "MORON", "LANUS", "EL DOQUE", "SARANDI", "TU COLA", "VERGADURA", "CUQUINAGUA", "CHIRIMONGO", "MERLO", "KIKOLINA"]

const remarks = ["DELAYED", "CANCELLED", "ON TIME", "ON TIME", "ON TIME", "DELAYED"]

let hour = 20





function populateTable(){

    for(const flight of flights){

        const tableRow = document.createElement("tr");

        for(const flightDetails in flight){

            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetails]);
            for(const [index, letter] of word.entries()){

                const letterElement = document.createElement('div')

                setTimeout(()=>{
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement);
                }, 100 * index)
            }
            tableRow.append(tableCell);
        }
        tableBody.append(tableRow);
    }


}


populateTable();



function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}



function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if(maxNumber){
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}


function generateTime(){
    let displayHour = hour

    
    if(hour <= 23){
        hour++
        displayHour = hour
    }
    if(hour >=24){
        hour = 0
        displayHour = hour
    }
    if(hour < 10){
        displayHour = "0" + hour
    }
    

    return displayHour + ":" + generateRandomNumber(6) + generateRandomNumber()
}


function generateRandomTime(){
    let randomHour = Math.floor(Math.random()*25)

    if(randomHour < 10){
        randomHour = "0" + randomHour
    }

    return randomHour + ":" + generateRandomNumber(6) + generateRandomNumber()

}


function shuffleUp(){
    flights.shift();
    flights.push({
        time:generateRandomTime(),
        destination: destination[Math.floor(Math.random()*destination.length)],
        flight: generateRandomLetter() + generateRandomLetter() + "  " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + "  " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 3000)






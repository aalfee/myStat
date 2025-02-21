
//Creating and accessing dynamic array
let dynamicArray = [];

//Accessing the variables form the global scope and storing in the array
let dynamicCount = 0;   // n value

//Accessing the mean here as a dynamic average
let dynamicAverage;

//Accessing variances here as dynamic storage
let dynamicVariance = [];

//Accessing squared deviations here as dynamic storage
let dynamicSquaredDeviation = [];

//Accessing sum of squared deviations here as dynamic storage
let dynamicSumSquaredDeviation = 0;

//Accessing standard deviation here as dynamic storage
let dynamicStandardDeviation;

//Accessing square root of N here as dynamic storage
let dynamicSqrtN;

//Accessing Standard Error of the Mean here as dynamic storage
let dynamicSEM;

function addValue(){
dynamicArray.push(window.var1);

console.log(dynamicArray);
}

//Calculating the number of data values and mean then showing only the mean on document
function myMean(){
    let arrayLength = dynamicArray.length;
    dynamicCount=arrayLength;   //store count for n value
    let arraySum = 0;
    let arrayAverage = 0;
    for (let i = 0; i <arrayLength; i++){
        arraySum+=parseInt(dynamicArray[i]);    //make sure to parseInt for calculations when iterating through the array because its a global variable that was saved as a String
    }
    console.log("Sum is "+arraySum);
    arrayAverage=arraySum/arrayLength;
    dynamicAverage=arrayAverage;
    document.getElementById('meanOutput').innerText=`${arrayAverage}`   //call document and extract the info by id to modify the text using the `${}` to transform data into text for display in document
}
//Show the number of data values on the document
function myCount(){
    document.getElementById('countOutput').innerText=`${dynamicCount}`   //call document and extract the info by id to modify the text using the `${}` to transform data into text for display in document
}
//Calculating and showing on the document how spread out the data values are from the average
function myVariance(){
    for(let i = 0; i <dynamicArray.length; i++){
        let variance = dynamicArray[i]-dynamicAverage;
        dynamicVariance.push(variance);                     //store the variances for access later
        document.getElementById('varianceOutput').innerText+=`${variance}`+"\n";    //outputting the variances individually with newline at the end of each data point
    }
}
//Calculating and showing the squared deviation from variances to eliminate negative values and emphasize LARGE deviations
function mySquaredDeviation(){
    for(let i = 0; i <dynamicVariance.length; i++){
        let squaredDeviation = dynamicVariance[i]*dynamicVariance[i];
        dynamicSquaredDeviation.push(squaredDeviation);
        document.getElementById('squaredDeviationOutput').innerText+=`${squaredDeviation}`+"\n";    //outputting the variances individually with newline at the end of each data point
    }
}
//Calculating and showing the sum of the squared deviations from variances
function mySumSquaredDeviation(){
    let SumSquaredDeviation = 0;
   for(let i = 0; i<dynamicSquaredDeviation.length; i++){
    SumSquaredDeviation+=dynamicSquaredDeviation[i];
   }
   dynamicSumSquaredDeviation = SumSquaredDeviation;
   document.getElementById('sumSquaredDeviationOutput').innerText=`${SumSquaredDeviation}`;
}
//Calculating and showing the SD which is the sum of squared deviations devided by count (or n)
function myStandardDeviation(){
    let StandardDeviation;
    StandardDeviation=(dynamicSumSquaredDeviation/dynamicCount);
   dynamicStandardDeviation = StandardDeviation;
   document.getElementById('StandardDeviationOutput').innerText=`${StandardDeviation}`;
}
//Calculate and show the square root of count (or n)
function mySqrtN(){
    let sqrtN;
    sqrtN = Math.sqrt(dynamicCount);    //square root this using math function because using the babylonian method uses guesses and I don't want to do that even though I love arithmetic calculations over anything else
    dynamicSqrtN = sqrtN;
    document.getElementById('SqrtNOutput').innerText=`${sqrtN}`;
}
//Calculate and show the Standard Error of the Mean (SEM)
function mySEM(){
    let SEM;
    SEM = (dynamicStandardDeviation/dynamicSqrtN);
    dynamicSEM = SEM;
    document.getElementById('SEMOutput').innerText=`${SEM}`;
}

//Get functions
    
function getDynamicArray(){
    return dynamicArray;
}



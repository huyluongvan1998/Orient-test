const array = [
    {
        id: 1,
        startTime: 180,
        endTime: 220
    },
    {
        id: 2,
        startTime: 0,
        endTime: 120
    },
    {
        id: 3,
        startTime: 110,
        endTime: 150
    },
    // {
    //     id: 4,
    //     startTime: 300,
    //     endTime: 400
    // },
    // {
    //     id: 5,
    //     startTime: -1,
    //     endTime: 150
    // },
]


// -------------------------------------------------------------Utils Function -------------------------------------------------------------//
function compare(a,b) {
    if(a.startTime < b.startTime) {
        return -1;
    }
    if(a.startTime > b.startTime){
        return 1
    }
    return 0
}

function validation(arr) {
    const result = arr.filter(e => e.startTime > 1440 || e.endTime > 1440 || e.startTime < 0 || e.endTime < 0);
    if(result.length > 0) {
        return false;
    } else {
        return true;
    }
}




// -------------------------------------------------------------Main Function -------------------------------------------------------------//
function handler(array, number) {
    let temp_arr = [];
    let i = 0;
    //sort block array ascendent
    array.sort(compare);
    //Check limit of the block array
    const isValid = validation(array);

    if(isValid) {
        while (i <= array.length - 2) {
            //Find the first block array
            if(array[i].endTime + number <= array[i+1].startTime){
                temp_arr.push({startTime: array[i].endTime, endTime: array[i].endTime + number})
            }
            i++;
        }
        //If there are no slot earlier
        if(temp_arr.length === 0){
            temp_arr.push({startTime: array[array.length-1].endTime, endTime: array[array.length-1].endTime + number})
        }
        console.log(`result of ${number}: `,temp_arr)
    }
    else console.log('Your Input is greater than limit from 0 to 1440, Please check again the value')
}


// handler(array, 10);
// handler(array, 20);
handler(array, 30);
// handler(array, 40);
// handler(array, 50);
handler(array, 60);
// handler(array, 70);


// onclick functions

const expand = () => {
    let dots = document.querySelector('#dots');
    let seeMore = document.querySelector('#seeMore'); 
    let btnText = document.querySelector('#readMoreBtn');

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        seeMore.style.display = "none";
    } else {
        dots.style.display = "none";
      btnText.innerHTML = "Read less";
      seeMore.style.display = "inline";
    }
}
const expand2 = () => {
    let dots2 = document.getElementById('dots2');
    let seeMore2 = document.getElementById('seeMore2');
    let btnText2 = document.getElementById('readMoreBtn2');

    if(dots2.style.display === "none"){
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        seeMore2.style.display = 'none';

    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = 'Read less';
        seeMore2.style.display = 'inline';

    }
}
const expand3 = () => {
    let dots3 = document.querySelector('#dots3');
    let seeMore3 = document.querySelector('#seeMore3');
    let btnText3 = document.querySelector('#readMoreBtn3');

    if (dots3.style.display === 'none'){
        dots3.style.display = 'inline';
        btnText3.innerHTML = 'Read more';
        seeMore3.style.display = 'none';
    } else {
        dots3.style.display = 'none';
        btnText3.innerHTML = 'Read less';
        seeMore3.style.display = 'inline';
    }
}

// validation functions
//let angle = document.getElementById('angle').value 

let validateAngle = function (){  
   const angle = document.getElementById('angle').value 
 
if (angle < 89){
    document.getElementById("msg1").style.color='green';
     document.getElementById("msg1").innerHTML="Valid";
     //return true;
} else if(angle === 90){
    document.getElementById("msg1").style.color="red";
    document.getElementById("msg1").innerHTML="You cant go upwind at 90 degrees, you are beam reaching.";
    //return true;
} else if (angle === null)
{document.getElementById("msg1").style.color="red";
document.getElementById("msg1").innerHTML="Please enter a number.";
//return(false);
}
//else if(angle < 0){
   // var direction = 'downwind';
    //let angle = math.abs(angle)
    //}
}
// let valangle = document.getElementById('angle');
// valangle.addEventListener('onblur', validateAngle);
//angle.onblur = validateAngle;



// calculation functions

let upwindAnyAngle = function() {
    let dist = document.querySelector("#distance").value;
    let angle = document.querySelector("#angle").value;
    let direction = 'upwind';
    const  radians = angle * Math.PI / 180;
    const totalDist = (1/ Math.cos(radians)) * dist;
  return document.getElementById("print1").innerHTML =
  `Your overall distance is ${totalDist.toFixed(2)} if you sail ${direction} at ${angle} degrees to a destination ${dist} NM straight upwind.  `
} 

let calculate = document.getElementById('calcupwind');
calculate.addEventListener('click', upwindAnyAngle)
// or can use
//calculate.onclick = upwindAnyAngle;

const findETA = () => {
    let dist = document.getElementById('dist2').value;
   let speed = document.querySelector("#speed").value;
    //retuns time in hours
    let total = dist / speed;
    let min = 60 * (total  - Math.floor(total));
   // let hours = Math.floor(total);
   // let minuets = total.split('.') * 60;
    return document.getElementById('print2').innerHTML = `Estimated time = ${Math.floor(dist / speed)} hours ${min.toFixed(0)} minuets of sail time for this passage.` ;
}
let calc2 = document.getElementById('calc2');
calc2.onclick = findETA;

const findSpeed = ()=>{
    let dist3 = parseInt(document.querySelector('#dist3').value);
    let min3 = parseInt(document.querySelector('#minuets').value);
    let hours = parseInt(document.querySelector('#hours').value);
    let measurement = document.querySelector('#measurement').value
    let dechours = (min3 / 60);
    let totalhours = hours + dechours;
    aveSpeed = dist3 / totalhours;

    console.log(min3)
    console.log(dist3)
    console.log(hours)
    console.log(aveSpeed)
    console.log(totalhours)
    console.log(dechours)


    return document.querySelector('#print3').innerHTML = `Your average speed is ${aveSpeed.toFixed(2)}${'measurement'}`;
    //eneter time in hours
    //return ((60 * dist) / time) / 60;
}



/*
const calc = (dist, speed, time) => {
   const total = (60 * dist) / (speed * time);
   return total;
}

const calcDist = (speed, time) => {
    //enter time in muinets
   return (speed * time) / 60
}

const calcdisthours = (speed, time) => {
    // enter time in hours
    return  (speed * time)
}
const findmin = time => {
   return time * 60
}


const convertToDecMin = (minuets) =>{
  return minuets / 60; 
}
 const upWindDist45 = dist => {
     //45 degrees off the wind
        return dist * 1.414;
 }
 const upWindDist50 = dist => {
    return dist * 1.743;

 }


/*
const findDegrees = angle => {
  const  radians = angle * Math.PI / 180;
  return 1/ Math.cos(radians);
    
} 

console.log('Your distance was ' + calcDist(5, 25) + ' NM.');
console.log('Your distance was ' + calcdisthours(5, 25) + ' NM.');
console.log(findmin(2.5))
console.log('your trip will take ' + findETA(60, 5) + ' hours.')
console.log('your avaerage speed was ' + findSpeed(50, 12))
console.log(convertToDecMin(59));
console.log('45 degrees off the wind, actual milage is ' + upWindDist45(300) + 'NM.')
console.log('50 degrees off the wind, actual milage is ' + upWindDist50(300) + 'NM.')
console.log(upwindAnyAngle(250, 166));
//console.log(findDegrees(60))

*/



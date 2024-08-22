const heightInput=document.getElementById('height');
const weightInput=document.getElementById('weight');
const resultDisplay=document.getElementById('result');
const calculateBtn=document.getElementById('calculate-btn');


function calculateBMI(){

    const height= parseFloat(heightInput.value);
    const weight=parseFloat(weightInput.value);

    if(isNaN(height)||isNaN(weight)||height<=0||weight<=0){
        resultDisplay.textContent="please enter valid height and weight !";
        resultDisplay.style.color='red';
        return;
    }

    const heightInMeters=height/100;

    const bmi=weight/(heightInMeters*heightInMeters);

    let category='';

    if(bmi<18.5){
        category='Underweight';
    }

    else if(bmi>18.5 && bmi<24.9){
        category='Normal weight';
    }

    else if(bmi>=25 && bmi<29.90){
        cout<<'overweight';
    }

    else{
        category='obese';
    }

    resultDisplay.textContent=`your BMI is ${bmi.toFixed(2)}(${category})`;
    resultDisplay.style.color='red';
}

calculateBtn.addEventListener('click',calculateBMI);
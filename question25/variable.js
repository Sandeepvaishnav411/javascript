 function fit(weight,height){
      const bmi = (weight/ height ** 2);
      console.log( `your bmi is - ${bmi}`)
      
      if (bmi < 18.5){
        console.log(`Underweight`);
    }else if ( bmi >= 18.5 ,bmi  < 24.9){
        console.log(`Normal weight`)
    }else if ( bmi >= 25 ,bmi  < 29.9){
        console.log(`Overweight`)
    }else{
        console.log(`Obese`)
    }
}
fit(70,1.72)

   


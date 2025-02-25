function getBMI(){
    let weight= parseFloat(document.getElementById('input-weight').value);
    let height= parseFloat(document.getElementById('input-height').value);
    let heightinMeter= height* 0.01;
    let finalH= heightinMeter* heightinMeter;
    let BMI= weight/finalH;
    let category='';
    // let heightinMiter= height* 0.01;
    // let finalHeight= heightinMiter*heightinMiter;
    // let BMI = weight/finalHeight;
    // return BMI;
    if(BMI <18.5){
      category='under'
    }
    else if(BMI <= 24.9){
        category='normal'
    }
    else if(BMI<= 29.9){
        category='over'
    }
    else if(BMI<=34.9){
       category='class I'
    }
    else if(BMI<=39.9){
       category='class II'
    }
    else{
        category='Over'
       
    }

    let result = document.getElementById('result');
result.innerText=`${BMI}`
    
}


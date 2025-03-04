function getBMI(){
    let weight= parseFloat(document.getElementById('input-weight').value);
    let height= parseFloat(document.getElementById('input-height').value);
    let heightinMeter= height* 0.01;
    let finalH= heightinMeter* heightinMeter;
    let BMI= weight/finalH;
    let category='';

    if (BMI < 0 || BMI > 40 || isNaN(BMI)) {
        alert('Invalid input! Please enter valid weight and height.');
        return;
    }
    if(BMI <18.5){
      category='আপনার ওজন কম। পুষ্টিকর খাবার খান, যেমন প্রোটিন, শস্য, ও স্বাস্থ্যকর ফ্যাট। নিয়মিত খাওয়ার অভ্যাস করুন ও বিশেষজ্ঞের পরামর্শ নিন'
    }
    else if(BMI <= 24.9 ){
        category='আপনার BMI স্বাভাবিক! স্বাস্থ্যকর খাদ্যাভ্যাস ও নিয়মিত ব্যায়াম চালিয়ে যান। সুস্থ থাকতে জীবনযাত্রা বজায় রাখুন।'
    }
    else if(BMI<= 29.9){
        category='আপনার ওজন বেশি। খাবারের পরিমাণ নিয়ন্ত্রণ করুন, প্রসেসড খাবার এড়িয়ে চলুন এবং শারীরিক কার্যক্রম বাড়ান।'
    }
    else if(BMI<=34.9){
       category='আপনার BMI স্থূলতার মধ্যে পড়ে। স্বাস্থ্যকর খাবার খান, নিয়মিত ব্যায়াম করুন ও প্রয়োজনে বিশেষজ্ঞের সাহায্য নিন।'
    }
    else if(BMI<=39.9){
       category='আপনার স্থূলতা বাড়তি স্বাস্থ্যঝুঁকি সৃষ্টি করতে পারে। স্বাস্থ্যকর খাদ্যাভ্যাস, ব্যায়াম ও বিশেষজ্ঞের পরামর্শ নিন।'
    }
    else{
        category='গুরুতর স্থূলতা!! ওজন নিয়ন্ত্রণের জন্য চিকিৎসকের পরামর্শ নিন ও জীবনধারা পরিবর্তন করুন।'
       
    }

    let result = document.getElementById('result');
result.innerText=`${category}`
    
}


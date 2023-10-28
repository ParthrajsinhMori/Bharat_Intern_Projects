function onChange() {
  var e1 = document.getElementById("from1");
  var value1 = e1.value;
  var text1 = e1.options[e1.selectedIndex].text;
  console.log(value1, text1);
  var e2 = document.getElementById("to1");
  var value2 = e2.value;
  var text2 = e2.options[e2.selectedIndex].text;
  console.log(value2, text2);
  let temp = document.getElementById("in").value;
  if(temp==''){
    window.alert("Enter tempertaure");
  }
  else if(value1=='from'){
    window.alert("Select appropriate current unit");
  }
  else if(value2=='to'){
    window.alert("Select appropriate desired unit");
  }
  else if(isNaN(temp)){
    window.alert("Enter a Numerical value");
  }
  else if(value1==1){
    temp=parseFloat(temp);
    if(value2==5){
      document.getElementById("out").innerHTML=temp + "°C  =  " + temp + "°C";
    }
    if(value2==6){
      document.getElementById("out").innerHTML=temp + "°C  =  " + (((9/5)*temp) +32) + "°F";
    }
    if(value2==7){
      document.getElementById("out").innerHTML=temp + "°C  =  " + (temp+273.15) + "K";
    }
    if(value2==8){
      document.getElementById("out").innerHTML=temp + "°C  =  " + ((temp*(9/5))+491.67) + "°R";
    }
    if(value2==9){
      document.getElementById("out").innerHTML=temp + "°C  =  " + (((9/5)*temp) +32) + "°F,    " +  (temp+273.15) + "K,    " + ((temp*(9/5))+491.67) + "°R.";
    }
  }
  else if(value1==2){
    temp=parseFloat(temp);
    if(value2==5){
      document.getElementById("out").innerHTML=temp + "°F  =  " + (((5/9)*temp)-(32*(5/9))) + "°C";
    }
    if(value2==6){
      document.getElementById("out").innerHTML=temp + "°F  =  " + temp + "°F";
    }
    if(value2==7){
      document.getElementById("out").innerHTML=temp + "°F  =  " + ((((5/9)*temp)-(32*(5/9)))+273.15) + "K";
    }
    if(value2==8){
      document.getElementById("out").innerHTML=temp + "°F  =  " + (((((5/9)*temp)-(32*(5/9)))*(9/5))+491.67) + "°R";
    }
    if(value2==9){
      document.getElementById("out").innerHTML=temp + "°F  =  " + (((5/9)*temp)-(32*(5/9))) + "°C,    " +  ((((5/9)*temp)-(32*(5/9)))+273.15) + "K,    " + (((((5/9)*temp)-(32*(5/9)))*(9/5))+491.67) + "°R.";
    }
  }
  else if(value1==3){
    temp=parseFloat(temp);
    if(value2==5){
      document.getElementById("out").innerHTML=temp + "K  =  " + (temp-273.15) + "°C";
    }
    if(value2==6){
      document.getElementById("out").innerHTML=temp + "K  =  " + (((9/5)*(temp-273.15)) +32) + "°F";
    }
    if(value2==7){
      document.getElementById("out").innerHTML=temp + "K  =  " + temp + "K";
    }
    if(value2==8){
      document.getElementById("out").innerHTML=temp + "K  =  " + (((temp-273.15)*(9/5))+491.67) + "°R";
    }
    if(value2==9){
      document.getElementById("out").innerHTML=temp + "K  =  " + (temp-273.15) + "°C,    " +  (((9/5)*(temp-273.15)) +32) + "°F,    " + (((temp-273.15)*(9/5))+491.67) + "°R.";
    }
  }
  else if(value1==4){
    temp=parseFloat(temp);
    if(value2==5){
      document.getElementById("out").innerHTML=temp + "°R  =  " + (temp-491.67)/(9/5) + "°C";
    }
    if(value2==6){
      document.getElementById("out").innerHTML=temp + "°R  =  " + (((9/5)*(temp-491.67)/(9/5)) +32) + "°F";
    }
    if(value2==7){
      document.getElementById("out").innerHTML=temp + "°R  =  " + ((temp-491.67)/(9/5)+273.15) + "K";
    }
    if(value2==8){
      document.getElementById("out").innerHTML=temp + "°R =  " + temp + "°R";
    }
    if(value2==9){
      document.getElementById("out").innerHTML=temp + "°R =  " + (temp-491.67)/(9/5)  + "°C,    " +  (((9/5)*(temp-491.67)/(9/5)) +32)+ "°F,    " + ((temp-491.67)/(9/5)+273.15) + "K.";
    }
  }
  else{
    console.log(value1);
  }
}



let data = 2;

function buttonTest() {
  /*  let num = 100;
    num = num + 2;
    console.log(num);*/
    data = count(data);
    console.log(data);
}

function count(countData) {
    /*
    countData = countData + 1;
    return countData;
   if(countData < 10){
    countData += 1;
   }
   return countData;
      for(let i = 0; i < 10; i++){
        countData += 3;
        console.log(i);
      }
      return countData;
             */
    
    while(countData < 15){
        countData++;
        console.log(countData);
    }
    return countData;
}
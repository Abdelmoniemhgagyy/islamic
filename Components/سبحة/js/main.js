let btn1=document.getElementById("btn1");
let btns=document.querySelectorAll(".btn")
let returnm=document.querySelectorAll(".return")
let y=[10,100,1000,10000]
let tmp ;


    //   const counters = new Array(btns.length).fill(0);
    const counters = [];

      for (let i = 0; i < btns.length; i++) {
        counters.push(0)
          btns[i].onclick = function () {
              counters[i] += 1;
             btns[i].innerHTML = `${counters[i]}`;
            //  ------------------------------------
            //  ------------10-100-1000-------------
             if(y.includes(counters[i]) ){
                if(i===6||i===7||i===8){
                    this.contains;
                }
                btns[i].style.backgroundColor="red";
             }
             else{
                btns[i].style.backgroundColor="black";
             }
            // --------------------------------------
            if(i===6||i===7||i===8){
                if(counters[i]===33 ){
                btns[i].style.backgroundColor="red";
                }else{
                btns[i].style.backgroundColor="black"
                }}



          }
        // function return 0
         returnm[i].onclick=function(){
            btns[i].innerHTML=0;
            counters[i] =0;
            }

       
      }
      
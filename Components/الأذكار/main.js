
let nas = document.querySelector(".text-adkar .nas");
let btn1 = document.querySelector(".btncontaineradkar .btn1");
let btn2 = document.querySelector(".btncontaineradkar .btn2");
let number = document.querySelector(".btncontaineradkar .number");

hadith()
function hadith(){
    
    ;
fetch("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json")
.then(res => res.json())
    .then(data => {
        console.log(data.content)
        let hadithindex =0;
        let hadith =data.content;
        hadithchange()
        btn1.addEventListener("click",() =>{
            if(hadithindex >=30){
                hadithindex=0;
            }else{
                hadithindex++;
            }
            hadithchange()
})

btn2.addEventListener("click",()=>{   
    if(hadithindex <= 0){
        hadithindex=299;
    }else{
        hadithindex-=1;
    }
    hadithchange()

})


        function hadithchange(){
            nas.innerHTML=hadith[hadithindex].zekr;
            number.innerText=`${hadithindex+1}`
        }
    })


      
    }
   
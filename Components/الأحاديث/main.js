
let nas = document.querySelector(".nas");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let number = document.querySelector(".number");

hadith()
function hadith(){
    fetch("https://api.hadith.gading.dev/books/muslim?range=1-300").then(res => res.json())
    .then(data => {
        
        let hadithindex =0;
        let hadith =data.data.hadiths;
        hadithchange()
        btn1.addEventListener("click",() =>{
            if(hadithindex >=299){
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
            nas.innerHTML=hadith[hadithindex].arab;
            number.innerText=`${hadithindex+1}`
        }

    })

}

let nas = document.querySelector(".text-adkar .nas");



let container_adkar = document.querySelector(".container");

hadith()

function hadith(){
    
    ;
fetch("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json")
.then(res => res.json())
    .then(data => {
        let hadithindex =0;
        let hadith =data.content;
        let n =1
        hadith.forEach((ele) =>{
            container_adkar.innerHTML +=`
            <div class="content-adkar">
            <div class="text-adkar">
              <p class="nas">
              - ${ele.zekr}
              </p>
              <button class="btn number"> عدد مرات التكرار : <span>${ele.repeat}</span></button>
            </div>
              </div>
              `
       })

       let content_adkar=document.querySelectorAll(".content-adkar")
       let number = document.querySelectorAll(".number")
       let span = document.querySelectorAll(".number span");
   
      
       span.forEach((ele) =>{
        ele.parentElement.addEventListener("click",()=>{
            if(ele.innerHTML<=1){
                ele.innerHTML = ""
                ele.parentElement.style.backgroundColor="#3F51B5"
                ele.parentElement.style.color="#fff"
                ele.parentElement.style.fontWeight="100"
                document.documentElement.scrollTop +=200
            }
            else{
                ele.innerHTML -=1
            } 
        })

       })

    }    
        )
        
      
         

   

      


      
    }
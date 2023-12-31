let container =document.querySelector(".container")

quran()

function  quran(){

 fetch("https://api.alquran.cloud/v1/meta")

    .then( async (res) => await res.json())
    .then((data) => {
        console.log(data)
        let surah = data.data.surahs.references; 
        container.innerHTML = "";
        surah.forEach((ele) => {
            container.innerHTML += `
                <div class="box">
                            <h3>${ele.name}</h3>
                            <p>${ele.englishName}</p>
                </div>`
            
        })
        let box  = document.querySelectorAll(".box");
        let sura = document.querySelector(".sura");
        let ayatcon= document.querySelector(".ayat");

        box.forEach((title,index) =>{
            title.addEventListener("click",()=>{
                // https://api.quran.gading.dev/surah/18
                fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let ayatd = data.data.ayahs;
                    ayatcon.innerHTML="";
                ayatd.forEach((ele) =>{
                    sura.classList.add("active");
                    container.classList.add("none");
                    ayatcon.innerHTML +=
                    `
                    <p>${ele.text} <span>﴿${ele.numberInSurah}</<span>﴾ </p>

                    `
                })
            })
            })
        })

})



// remove button 

         let button = document.querySelector(".remove")
             button.addEventListener("click",()=>{
             button.parentElement.classList.remove("active")
             container.classList.remove("none")
             
  })
  
}

// --------TOP BUTTON----------

let ele = document.querySelector(".up");
addEventListener("scroll",()=>{
    let scroll= document.documentElement.scrollTop;
    if(scroll >= 800){
ele.classList.add("show")
    }else{
        ele.classList.remove("show")
    }
})
ele.onclick = function up(){
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ---------END---------



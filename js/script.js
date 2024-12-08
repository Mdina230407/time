const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hourBox     = document.querySelector('.hours'),
        minuteBox   = document.querySelector('.minutes');
        

function watch() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours   = time.getHours()
    
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    
    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    
    setTimeout(() => watch(), 1000)
}
watch()



// рекурсия это когда функция вызывает саму себя внутри
// setTimeout - позволяет выполнить код с указанной задержкой

// let i = 0;

// function primer() {
//     if(i < 10) {
//         console.log(i);
//         i++
//        setTimeout(() =>  primer(), 1000)
//     }
// }
// primer()



const links = document.querySelectorAll('.tabsItem')
const tabs  = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})



function removeActive() {
    links.forEach((item,i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


















        


const   seconds = document.querySelector('.stopwatch__seconds'),
        minutes = document.querySelector('.stopwatch__minutes'),
        hours   = document.querySelector('.stopwatch__hours'),
        bottom       = document.querySelector('.stopwatch__btn'),
        span       = document.querySelector('.tabsLink__span');


        // btn.addEventListener('click', ()=>{
        //     if(btn.innerHTML=='start'){
        //         btn.innerHTML = 'Stop'
        //         span.classList.add('active')
        //         let i =0
        //         second()

        //     }

        //     function second(){
        //         if(btn.innerHTML=='stop'){
        //             if(i==59){}
        //         }
        //     }





bottom.addEventListener('click', () => {
     if(bottom.innerHTML == 'start') {
         bottom.innerHTML = 'stop'
         span.classList.add('active')
         let i = 0
         secundomer(bottom,i)
     }else if(bottom.innerHTML == 'stop') {
         bottom.innerHTML = 'clear'
         span.classList.remove('active')
         span.classList.add('active_clear')
     }else {
         bottom.innerHTML = 'start'
         span.classList.remove('active_clear')
         seconds.innerHTML = 0
         minutes.innerHTML = 0
         hours.innerHTML = 0
     }
 })


 function secundomer(bottom,i) {
     if(bottom.innerHTML == 'stop') {
         if(i == 59) {
             i = 0
             seconds.innerHTML = i
             if(minutes.innerHTML == 59) {
                 minutes.innerHTML = 0
                 hours.innerHTML++
             }else {
                 minutes.innerHTML++
             }
         }else {
            i++
            seconds.innerHTML = i
         }
         setTimeout(() => secundomer(bottom,i), 100)
     }
 }
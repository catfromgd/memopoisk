const mems=document.querySelectorAll('.mem')
const form=document.querySelector('.memform')
const input=document.querySelector('.meminput')
const database=[
'Амогус', 'Артём, ты уроки сделал?', 'А ты считаешь гемы', 'Бомж', "Бравл старс бравл старс - это новый бравл старс"
]
form.addEventListener('submit', function(event){
    event.preventDefault()
    const word=input.value
    const showmems=database.filter(mem=>mem.includes(word))
    console.log (showmems)
    mems.forEach(mem=>mem.style.display='none')
    for (let i = 0; i < mems.length; i++) {
        const element = mems[i];
        console.log(element)
        showmems.forEach(mem=>{
            if(element.querySelector('h2').textContent==mem){
                console.log(i)
                element.style.display='block'
            }
        })
    }
})
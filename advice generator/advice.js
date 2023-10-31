
let advice = document.getElementById('showadvice');
let randombtn = document.getElementById('randombtn');
let searchbtn = document.getElementById('searchbtn');
let searchinput = document.getElementById('searchinput');


function randomfunc() {

    const randomadvice = fetch(`https://api.adviceslip.com/advice`);
    randomadvice.then(res => {

        return res.json();
    })
        .then((data) => {
            console.log(data)

            showadvice.innerHTML = data.slip.advice;
        })

}

function searchfunc() {
    let searchinput = document.getElementById('searchinput');

    let query = searchinput.value;

    if (searchinput.value === "") { showadvice.innerHTML = "Search box is empty"; }

    else {
        const randomadvice = fetch(`https://api.adviceslip.com/advice/search/{query}`);

        randomadvice.then(res => {

            return res.json();
        })

            .then((data) => {
                console.log(data)
                if(data.message){
                    
                    showadvice.innerHTML = data.message.text + ' '+ searchinput.value;
                }
                else{
                    showadvice.innerHTML = data.message.text;
                    
                }
            })
    }

}


searchbtn.addEventListener('click', searchfunc)

randombtn.addEventListener('click', randomfunc)

const IsEnter = (event)=>{
     if(event.code === 'Enter'){
        searchfunc();
     }
}


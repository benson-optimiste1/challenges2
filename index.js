function usdToKorean(event){
    event.preventDefault();
    const usd= event.target.usd.value;
    const Korean= usd * 1343.99
    const h2= document.querySelector('h2')
    h2.innerText = "$" + usd + " is " + Korean + " won "

}

const form = document.querySelector('form')
form.addEventListener('submit', usdToKorean)

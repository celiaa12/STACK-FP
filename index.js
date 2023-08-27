async function getQuote() {
    let res = await fetch('https://type.fit/api/quotes');
    let quote = await res.json();
    return quote;
}

async function addHTML(){
    let quote = await getQuote();

    let divBaru = document.createElement('div');
    divBaru.innerHTML = quote.Me;

    let Quote = document.getElementById('Quote');
    Quote.appendChild(divBaru);
}

addHTML();
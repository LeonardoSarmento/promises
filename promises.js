function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na promise.');
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi('Promise 4', rand(1, 5)),
];
//-------------------Promise.all--------------------------------
Promise.all(promises)
    .then (function(valor) {
        console.log(valor);
    })
    .catch(function(valor) {
        console.log(erro);
    });
//-------------------Promise.race--------------------------------
Promise.race(promises)
    .then (function(valor) {
        console.log(valor);
    })
    .catch(function(valor) {
        console.log(erro);
    });
// ------------------Promise.resolve-----------------------------
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
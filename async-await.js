function rand(min = 0, max = 3) {
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

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
        
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
        
        const fase4 = await esperaAi('Fase 4', rand());
        console.log(fase4);

        console.log('Terminamos na fase:', fase4);
    } catch(e) {
        console.log(e);
    }
}
executa();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const weight = () => {
    return new Promise((resolve, reject) => {
        readline.question('Weight?', value => {
            resolve(value)
        }) 
    })
}

const height = () => {
    return new Promise((resolve, reject) => {
        readline.question('Height?', value => {
            resolve(value)
        });
    })
}

function imc(weight, height) {
    return weight / (Math.pow(height, 2));
}


async function main() {
     console.log(imc(await weight(), await height()));
     readline.close();
}

main()
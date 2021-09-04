function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promessa.');
            resolve();
        }, 2000)
    });
}

export default async function () {
    await promesa();
    console.log('Terminou.');
}
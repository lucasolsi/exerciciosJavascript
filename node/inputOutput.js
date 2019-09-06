const anonymous = process.argv.indexOf('-a') !== -1;
//console.log(anonymous);

if (anonymous) {
    process.stdout.write('Hi there. \n');
    process.exit();
} else {
    process.stdout.write('Who are you?\n');
    process.stdin.on('data', data => {
        const name = data.toString().replace('\r\n', '');

        process.stdout.write(`\nWelcome, ${name}!`);
        process.exit();
    })
}
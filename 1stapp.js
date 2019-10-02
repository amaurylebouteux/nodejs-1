process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log ('How old are you?');
process.stdin.on('data', (age) => {
    let birthYear = 0;
    if (0 < age && age < 99 && birthYear < 2019){
        let birthYear = 2019- age;
        console.log(`You\'re born in ${birthYear}.`);
        process.exit();}
    else {
        console.log('Are you kinding me! ;)');
        process.exit();
    }
})
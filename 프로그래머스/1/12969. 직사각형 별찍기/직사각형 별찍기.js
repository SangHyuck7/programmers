process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]);
    const b = Number(n[1]);
    let result = "";
    
    for (let i = 1; i <= a * b; i++) {
        result += "*";
        
        if (i % a === 0) {
            result += "\n";
        }
    }
    
    console.log(result);
});
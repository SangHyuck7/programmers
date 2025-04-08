function solution(want, number, discount) {
    let result = 0;
    const wantMap = {};
    
    for (let i = 0; i < want.length; i++) {
        wantMap[want[i]] = number[i];
    }
    
    for (let i = 0; i <= discount.length - 10; i++) {
        let valid = true;
        const discountMap = {};
        

        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            discountMap[item] = (discountMap[item] || 0) + 1;
        }
        
        for (let key in wantMap) {
            if (discountMap[key] !== wantMap[key]) {
            valid = false;
                
            break;
            }   
         }

      if (valid) result++;
    }

    return result;
}
function solution(friends, gifts) {
    let result = 0;
    const giftCount = friends.reduce((acc, name) => {
        acc[name] = 0;
        
        return acc;
    }, {});
    
    const giftList = Object.fromEntries(
        friends.map(name => [
            name,
            Object.fromEntries(
                friends.filter(other => name !== other).map(other => [other, [0,0]])
            )
        ])
    );

    for (let i = 0; i < gifts.length; i++) {
        const [giver, sender] = gifts[i].split(" ");
        
        giftList[giver][sender][0]++;
        giftList[sender][giver][1]++;
        giftCount[giver]++;
        giftCount[sender]--;
    }

    for (const giver in giftCount) {
        let count = 0;
        
        for (const sender in giftList[giver]) {
            if (giftList[giver][sender][0] > giftList[giver][sender][1]) {
                count++;
            } else if (giftList[giver][sender][0] === giftList[giver][sender][1]) {
                if (giftCount[giver] > giftCount[sender]) {
                    count++;
                }
            }
        }
        
        result = Math.max(result, count);
    }
    
    return result;
}
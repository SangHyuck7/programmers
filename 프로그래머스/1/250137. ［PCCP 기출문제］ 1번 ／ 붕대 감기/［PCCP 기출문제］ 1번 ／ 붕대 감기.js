function solution(bandage, health, attacks) {
    let count = 0;
    let result = health;
    
    for (let i = 0; i < attacks.length; i++) {
        const [attackTurn, attackDamage] = attacks[i];
        const currentTurn = attackTurn - count - 1;
        let recovery = currentTurn * bandage[1];
        let currentHealth = result;
        
        if (Math.floor(currentTurn / bandage[0])) {
            recovery += Math.floor(currentTurn / bandage[0]) * bandage[2];
        }

        if (health < currentHealth + recovery) {
            currentHealth = health;
        } else {
            currentHealth += recovery
        }
        
        if (currentHealth - attackDamage <= 0) {
            result = -1;
            
            break;
            
        } else {
            result = currentHealth - attackDamage;
        }
        
        count = attackTurn;
    }
    
    return result;
}
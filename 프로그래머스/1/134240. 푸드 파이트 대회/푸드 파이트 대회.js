function solution(food) {
    const foodList = [];
    
    for(let i = 1; i < food.length; i++) {
        const countFood = Math.floor(food[i] / 2);
                                          
        foodList.push(...new Array(countFood).fill(i));
    }
    
    return [...foodList, 0, ...foodList.reverse()].join("");
}
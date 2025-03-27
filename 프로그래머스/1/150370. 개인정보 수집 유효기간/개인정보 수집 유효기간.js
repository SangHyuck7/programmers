const chageDate = (type, date) => {
    if (type === "year") {
        return (Number(date) * 12) * 28;
    } else if (type === "month") {
        return (Number(date)) * 28;
    }
}

function solution(today, terms, privacies) {
    const result = [];
    const [todayYear, todayMonth, todayDate] = today.split(".");
    const currentDate = chageDate("year", todayYear) + chageDate("month", todayMonth) + Number(todayDate);
    const typeMonth = terms.reduce((acc, key) => {
        const [type, month] = key.split(" ");
        acc[type] = chageDate("month", month);
        
        return acc;
    }, {});
    
    for (let i = 0; i < privacies.length; i++) {
        const [privaciesYear, privaciesMonth, privaciesDateType] = privacies[i].split(".");
        const [privaciesDate, privaciesType] = privaciesDateType.split(" ");
        
        const privaciesValidityDate = chageDate("year", privaciesYear) + chageDate("month", privaciesMonth) + Number(privaciesDate) + typeMonth[privaciesType];
        
        if (currentDate >= privaciesValidityDate) {
            result.push(i + 1);
        }
    }
    
    return result;
}
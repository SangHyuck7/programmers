function solution(id_list, report, k) {
    const reportCount = {};
    const reportConfirmList = [];
    const result = new Array(id_list.length).fill(0);
    
    const reportList = id_list.reduce((acc, name) => {
        acc[name] = [];
        return acc;
    }, {});
    
    for (let i = 0; i < report.length; i++) {
        const word = report[i].split(" ");
        
        if (!reportList[word[0]].includes(word[1])) {
            reportList[word[0]].push(word[1]);
            reportCount[word[1]] = (reportCount[word[1]] || 0) + 1;
        }
    }
    
    for (const key in reportCount) {
        if (reportCount[key] >= k) {
            reportConfirmList.push(key);
        }
    }
    
    id_list.forEach((user, idx) => {
        reportList[user].forEach(reportedUser => {
            if (reportConfirmList.includes(reportedUser)) {
                result[idx]++;
            }
        });
    });

    return result;
}
function solution(schedules, timelogs, startday) {
    let result = schedules.length;
    
    for (let i = 0; i < timelogs.length; i++) {
        let date = startday;
        
        const hour = Math.floor(schedules[i] / 100);
        const minute = schedules[i] % 100;
        const totalMinutes = hour * 60 + minute + 10;
        
        for (let j = 0; j < timelogs[i].length; j++) {
            if (date === 6) {
                date++;
                continue;
            }
            
            if (date === 7) {
                date = 1;
                continue;
            }
            
            const SchedulHour = Math.floor(timelogs[i][j] / 100);
            const SchedulMinute = timelogs[i][j] % 100;
            const SchedulTotalMinutes = SchedulHour * 60 + SchedulMinute;

            if (SchedulTotalMinutes > totalMinutes) {
                result--;
                
                break;
            }
            
            date++;
        }
    }
    
    return result;
}
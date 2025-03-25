function solution(video_len, pos, op_start, op_end, commands) {
    const parseTimeToSecond = (type, time) => {
        if (type === "second") {
            const [minute, second] = time.split(":").map(Number);
            
            return minute * 60 + second
        } else if (type === "minute") {
            const minute = Math.floor(time / 60);
            const second = time % 60;

            return `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
        }
    }
    
    let currentTime = parseTimeToSecond("second", pos);
    const videoRunTime = parseTimeToSecond("second", video_len);
    const opStratTime = parseTimeToSecond("second", op_start);
    const opEndTime = parseTimeToSecond("second", op_end);
    
    for (let i = 0; i < commands.length; i++) {
        if (currentTime >= opStratTime && currentTime <= opEndTime) {
            currentTime = opEndTime;
        }
        
        if (commands[i] === "next") {
            if ((videoRunTime - currentTime) < 10) {
                currentTime = videoRunTime;
            } else {
                currentTime += 10;
            }
        } else {
            if(currentTime < 10) {
                currentTime = 0;
            } else {
                currentTime -= 10;
            }
        }
        
        if (currentTime >= opStratTime && currentTime <= opEndTime) {
            currentTime = opEndTime;
        }
    }
    
    return parseTimeToSecond("minute", currentTime);
}
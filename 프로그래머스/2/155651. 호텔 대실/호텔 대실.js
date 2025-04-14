function solution(book_time) {
    const rooms = [];
    const toMinutes = (time) => {
        const [h, m] = time.split(":").map(Number);
        return h * 60 + m;
    };
    
    //시작 시간 기준 정렬
    const times = book_time.map(([start, end]) => [toMinutes(start), toMinutes(end) + 10]);
    times.sort((a, b) => a[0] - b[0]);
    
    for (let [start, end] of times) {
        let reused = false;
        
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i] <= start) {
                rooms[i] = end;
                reused = true;
                break;
            }
        }
        
        if (!reused) {
            rooms.push(end);
        }
    }
    
    return rooms.length;
}
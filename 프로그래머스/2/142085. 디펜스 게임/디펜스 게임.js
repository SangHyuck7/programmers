// 힙방법으로 풀이 했지만 시간복잡도 sort로 인해 초과
// function solution(n, k, enemy) {
//     const maxHeap = [];
//     let sum = 0;
    
//     for (let i = 0; i < enemy.length; i++) {
//         const e = enemy[i];
//         sum += e;
//         maxHeap.push(e);
//         maxHeap.sort((a, b) => b - a);
        
//         if (sum > n) {
//             if (k === 0) return i;
//             sum -= maxHeap.shift();
//             k--;
//         }
//     }
    
//     return enemy.length;
// }

// 힙유틸 구현 참고
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p] >= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    } 

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        const n = this.heap.length;
    
        while (true) {
            let left = 2 * i + 1, right = 2 * i + 2;
            let largest = i;
            
            if (left < n && this.heap[left] > this.heap[largest]) largest = left;
            if (right < n && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === i) break;
            
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    
        return top;
    }

    size() {
        return this.heap.length;
    }
}

function solution(n, k, enemy) {
    const heap = new MaxHeap();
    let sum = 0;

    for (let i = 0; i < enemy.length; i++) {
        sum += enemy[i];
        heap.push(enemy[i]);

        if (sum > n) {
            if (k === 0) return i;
            
            sum -= heap.pop();
            k--;
        }
    }

    return enemy.length;
}
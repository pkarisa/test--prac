function solution(A){
    let answer;
    var min = Math.min(...A)
    var max = Math.max(...A)
    for (i = min; i<= max; i++){
        if (A.includes(i)) {continue} 
        else {answer = i; break};
    }
    console.log (answer);
}

solution([1,4,6,3,8,7,9]);
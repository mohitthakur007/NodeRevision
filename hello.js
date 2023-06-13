function sumUptoNum(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}

console.log(sumUptoNum(3));

function fibonacci(n) {
    if (n == 1 || n == 2)
        return 1;
    return fibonacci(n - 2) + fibonacci(n - 1)
}

console.log(fibonacci(3));

/*
Complicated star pattern
 *
***

 */
function starLine(n, t) {
    var ans = "";
    var space = t - (n - 1) - 1;
    var stars = 2 * (n - 1) + 1;
    for (var i = 0; i < space; i++) {
        ans += " "
    }
    for (var i = 0; i < stars; i++) {
        ans += "*"
    }
    return ans;
}

function stars(n) {
    for (var i = 1; i <= n; i++) {
        console.log(starLine(i, n))
    }
}

stars(5);

/**
 Submitted a few DSA problems in JS
 1.Next Greater Element from a Given number
 Will keep adding if I do more
 **/

function nextGreater(n) {
    var arr = [];
    while (n > 0) {
        arr.push(n % 10);
        n = parseInt(n / 10);
    }
    arr.reverse();

    var idx = -1
    for (var i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            idx = i - 1
            break
        }
    }
    if (idx === -1)
        return -1;
    var nge = Number.MAX_VALUE;
    var idxr = -1;
    for (var i = arr.length - 1; i > idx; i--) {
        if (arr[i] > arr[idx]) {
            if (arr[i] < nge) {
                nge = Math.min(nge, arr[i])
                idxr = i;
            }
        }
    }
    console.log("******" + idx + "*******" + idxr);
    [arr[idx], arr[idxr]] = [arr[idxr], arr[idx]]
    var j = 0;
    for (var i = idx + 1; i < arr.length - 1 - j; i++) {
        [arr[i], arr[arr.length - 1 - j]] = [arr[arr.length - 1 - j], arr[i]]
        j++;
    }
    var ans = 0;
    for (var i = 0; i < arr.length; i++) {
        ans = ans * 10 + arr[i];
    }
    if (ans > 2147483647)
        return -1;
    return ans;

}

console.log(nextGreater(12222333));

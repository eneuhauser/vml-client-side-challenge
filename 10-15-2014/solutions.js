// All JS code goes in this file.

function palindrome(str){
    var fwd = str.replace(/\W/g, '').toLowerCase();
    var back = fwd.split('').reverse().join('');
    return fwd === back;
}

function coinDeterminer(num) {
    var remainder = num, counter = 0;
    [25, 10, 5, 1].forEach(function(coin) {
        if(coin > remainder) { return true; }
        counter += Math.floor(remainder / coin);
        remainder %= coin;
    });
    return counter;
}

function countingMinutes(strArr){
    function getMinutes(time) {
        var parts = /(\w+):(\w{2})(\w{2})/.exec(time);
        var hours = parseInt(parts[1]);
        var minutes = parseInt(parts[2]);
        var isMorning = parts[3] === 'am';

        if(isMorning && hours === 12) { hours = 0 }
        else if(!isMorning) { hours += 12 }
        return hours * 60 + minutes;
    }
    var time = strArr.split('-');
    var start = getMinutes(time[0]);
    var finish = getMinutes(time[1]);
    if(finish <= start) {
        finish += (24*60);
    }
    return finish - start;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;
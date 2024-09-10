export const convertNum = (num) => {
    let commaNum = num.toLocaleString();
    let arr = commaNum.split(',');
    if (arr.length == 5) { //BILLIONS
        return arr[0] + '.' + arr[1].slice(0, 2) + 'T';
    } else if (arr.length == 4) { //MILLIONS
        return arr[0] + '.' + arr[1].slice(0, 2) + 'B';
    } else if (arr.length == 3) { //THOUSANDS
        return arr[0] + '.' + arr[1].slice(0, 2) + 'M';
    } else if (arr.length == 2) { //HUNDREDS
        return arr[0] + '.' + arr[1].slice(0, 2) + 'K';
    } else {
        return commaNum;
    }
}
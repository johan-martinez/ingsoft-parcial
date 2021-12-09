function countLetters(text) {
    let string= String(text)
    var count= 0;
    for (let i = 0; i < string.length; i++) {
        let c=string.charCodeAt(i)
        if ((c>64&&c<90)||(c>96&&c<122)) 
            count++;
    }
    return count;
}

module.exports=countLetters
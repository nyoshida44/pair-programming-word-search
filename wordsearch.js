const wordSearch = (letters, word) => { 
    const rows = letters.length
    const columns = letters[0].length
    const empty = [];
    for (let i = 0; i < columns; i++) {
        empty[i] = []
    }
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            empty[i].push(letters[j][i]);
        }
    }

    const verticalJoin = empty.map(em => em.join(''))
        for (i of verticalJoin){
            if(i.includes(word)) {
            return true
    }
}
    const horizontalJoin = letters.map(ls => ls.join(''))

    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
    } 
}
    return false;
}
    
module.exports = wordSearch
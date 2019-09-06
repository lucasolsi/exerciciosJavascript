const http = require('http');

const getTurma = (char, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${char}.json`;
    http.get(url, res => {
        let result = '';
        res.on('data', recvData => {
            result += recvData;
        })
        res.on('end', () => {
            callback(JSON.parse(result));
        })
    })
};

let names = [];
getTurma('A', alunos => {
    names = names.concat(alunos.map(a => `A: ${a.name}`));
    console.log(names);
})
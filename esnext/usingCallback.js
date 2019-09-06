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
    names = names.concat(alunos.map(a => `A: ${a.nome}`));
    console.log(names);
    getTurma('B', alunos => {
        names = names.concat(alunos.map(a => `B: ${a.nome}`));
        console.log(names);
        getTurma('C', alunos => {
            names = names.concat(alunos.map(a => `C: ${a.nome}`));
            console.log(names);
        })
    })
})
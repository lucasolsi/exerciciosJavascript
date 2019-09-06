const http = require('http');

const getTurma = (char, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${char}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';
            res.on('data', recvData => {
                result += recvData;
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result));
                } catch (e) {
                    reject(e);
                }
            })
        })
    })
};

/* let names = [];
getTurma('A').then(alunos => {
    names = names.concat(alunos.map(a => `A: ${a.nome}`));
    console.log(names);
    getTurma('B').then(alunos => {
        names = names.concat(alunos.map(a => `B: ${a.nome}`));
        console.log(names);
        getTurma('C').then(alunos => {
            names = names.concat(alunos.map(a => `C: ${a.nome}`));
            console.log(names);
        })
    })
}) */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message));
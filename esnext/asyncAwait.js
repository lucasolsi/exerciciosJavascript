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

let findAlunos = async () => {
    const turmaA = await getTurma('A');
    const turmaB = await getTurma('B');
    const turmaC = await getTurma('C');
    return [].concat(turmaA, turmaB, turmaC);
}

findAlunos().then(alunos => alunos.map(a => a.nome))
    .then(names => console.log(names));
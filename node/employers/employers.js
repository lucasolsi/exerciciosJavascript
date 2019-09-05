const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const fromChina = empl => empl.pais === 'China';
const isWoman = empl => empl.genero === 'F';
const lowerSallary = (empl, currentEmpl) => {
    return empl.salario < currentEmpl.salario ? empl : currentEmpl;
};

axios.get(url).then(response => {
    const employers = response.data;
    //console.log(employers);

    const empl = employers.filter(fromChina).filter(isWoman).reduce(lowerSallary);
    console.log(empl);
})
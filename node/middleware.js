// Middleware
const stepOne = (context, next) => {
    context.value1 = 'mid1';
    next();
}

const stepTwo = (context, next) => {
    context.value2 = 'mid2';
    next();
}

const stepThree = context => context.value3 = 'mid3';

const exec = (context, ...middlewares) => {
    const execStep = index => {
        middlewares && index < middlewares.length && middlewares[index](context, () => execStep(index + 1));
    }
    execStep(0);
};

const context = {};
exec(context, stepOne, stepTwo, stepThree);
console.log(context);
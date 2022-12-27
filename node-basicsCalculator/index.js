const {sum,sub,mult,divide,sin,cos,tan,random} = require('./calculator');

const args = process.argv.slice(2);

  

if (args.length < 1) {
    console.log('Error: Not enough arguments');
    return;
}
const operation = args[0];
const operands = args.slice(1).map(Number);

switch (operation) {
    case 'sum':
        console.log(sum(...operands));
        break;
    case 'sub':
        console.log(sub(...operands));
        break;
    case 'mult':
        console.log(mult(...operands));
        break;
    case 'divide':
        console.log(divide(...operands));
        break;
        case 'sin':
        console.log(sin(...operands));
        break;
    case 'cos':
        console.log(cos(...operands));
        break;
    case 'tan':
        console.log(tan(...operands));
        break;
    case 'random':
        console.log(random(...operands));
        break;
    default:
        console.log('Error: Invalid operation');
        break;
}


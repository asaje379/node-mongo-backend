import chalk from 'chalk';
const logger = console.log;

export default {
    error: (info, code = null) => logger(chalk.red.bold(`\n[ERROR${code ? ':' + code : ''}]`, info)),
    success: info => logger(chalk.green('\n[SUCCESS]',info)),
    info: (data, type = '*') => logger(chalk.gray.bold(`\n[${type}]`, data)),
    warning: info => logger(chalk.yellowBright.bold('\n[WARNING]', info)),
    strong: info => logger(chalk.blueBright.bold('\n[*]', info))
};
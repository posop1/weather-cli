import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (mes) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + mes);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параментров - вывод погоды
    -s [CITY] для установки города.
    -h для вывода помощи.
    -t [API_KEY] для сохранения токена.
  `,
  );
};

export { printError, printSuccess, printHelp };

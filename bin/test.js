// #!/usr/bin/env node

// const program = require('commander');
// const chalk = require("chalk");
// const inquirer = require('inquirer'); // 启动交互命令行
// const ora = require("ora");

// program
//     .name("lzh_cli_demo")
//     .usage(`<command> [option]`)    
//     .version(`1.0.0`);


// program
//     .command('create <project-name>')
//     .description('create a new project')
//     .option('-f, --force', 'overwrite target directory if it exists')
//     .action((projectName, cmd) => {
        
//         console.log(projectName, cmd);
//     })

// program
//     .command("config [value]") // config 命令
//     .description("inspect and modify the config")
//     .option("-g, --get <key>", "get value by key")
//     .option("-s, --set <key> <value>", "set option[key] is value")
//     .option("-d, --delete <key>", "delete option by key")
//     .action((value, keys) => {
//         // value 可以取到 [value] 值，keys会获取到命令参数
//         console.log([value], keys);
//     });
  
// program.on("--help",function(){
//     console.log();
//     console.log(`Run ${chalk.yellowBright('clidemo <command> --help')} for detailed usage of given command.`);
//     console.log()
// })

// program.version(`democli ${require("../package.json").version}`);

// program.parse(process.argv);

// console.log(`hello ${chalk.blue("world")}`);
// console.log(chalk.blue.bgRed.bold("Hello world!"));
// console.log(
//   chalk.green(
//     "I am a green line " +
//       chalk.blue.underline.bold("with a blue substring") +
//       " that becomes green again!"
//   )
// );
  
// new inquirer.prompt([
//     {
//         name: "vue",
//         // 多选交互功能
//         // 单选将这里修改为 list 即可
//         type: "checkbox",
//         message: "Check the features needed for your project:",
//         choices: [
//         {
//             name: "Babel",
//             checked: true,
//         },
//         {
//             name: "TypeScript",
//         },
//         {
//             name: "Progressive Web App (PWA) Support",
//         },
//         {
//             name: "Router",
//         },
//         ],
//     },
//     ]).then((data) => {
//     console.log(data);
// });

// 定义一个loading
// const spinner = ora("Loading unicorns");
// 启动loading
// spinner.start();
// setTimeout(() => {
//   spinner.color = "yellow";
//   spinner.text = "Loading rainbows";
// }, 1000);

// loading 成功
// spinner.succeed();
// // loading 失败
// setTimeout(() => {
//     spinner.fail();
// }, 5000);


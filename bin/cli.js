#!/usr/bin/env node

const program = require('commander');
const addComponent = require('../lib/add-component')
const createProgramFs = require('../lib/create-program-fs');

program
    .command('create')
    .description('创建项目、页面或组件')
    .action((cmd, options) => createProgramFs(cmd))

program
    .command('addCom')
    .description('拷贝组件到src/component')
    .action((cmd) => addComponent(cmd))

program.parse(process.argv)
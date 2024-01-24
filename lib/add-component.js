const path = require('path')
const inquirer = require('inquirer')
const { isExisDir, getDirFiles, cpFile, mkDir, upperCaseFirst, log } = require('./utils')

const questions = [
    {
        type: 'list',
        name: 'select',
        message: '请选择组件',
        choices: [
            'Table',
            'UploadImage'
        ]
    }
]
async function addComponent(name) {
    const rootPath = process.cwd()
    const templatePath = path.join(__dirname, '../', 'components',name)
    let first = name[0];
    name = `${first.toUpperCase()}${name.substring(1)}`
    const componentPath = path.join(rootPath, './', 'src/components', name)
    const isExis = isExisDir(componentPath);
    const fileArrs = isExis ? await getDirFiles(componentPath) : []
    const templateComs = await getDirFiles(templatePath);
    const createFiles = async () => {
        for (let i = 0; i < templateComs.length; i++) {
            await cpFile(templatePath + '/' + templateComs[i], componentPath + '/' + templateComs[i])
        }
    }
    if (isExis && fileArrs.length > 0) {
        log.error('组件已存在 ,请检查文件路径 ：' + componentPath)
    } else if (isExis && fileArrs.length === 0) {
        await createFiles()
    } else {
        let res = await mkDir(componentPath)
        if (res)
            await createFiles()
        else
            log.error(`创建${name}文件夹`)
    }
    process.exit()
}


module.exports = async function () {
    inquirer.prompt(questions).then(answers => {
        const { select } = answers;
        addComponent(select)
    })
}
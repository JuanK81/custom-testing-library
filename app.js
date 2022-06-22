#!/usr/bin/env node


//file collection
//enviromet setup
//test execution
//report results


const Runner = require('./runner');
const runner = new Runner();

const run = async () => {
    await runner.collectFiles(process.cwd());
    console.log(runner.testFiles);
};

run();


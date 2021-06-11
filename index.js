var rl = require('readline');
const SlackLib = require('./util/SlackLib');
require('dotenv').config();

let slackLib = new SlackLib();

rl = rl.createInterface({
    input : process.stdin,
    output : process.stdout
});

rl.setPrompt('Welcome to Slack> ');
rl.prompt();

rl.on('line', async (input) => {
    // Exit prompt if user types exit
    (input == 'exit') ? process.exit() : '';
    
    let splitedArray = input.split(' ');
    
    // validate if input is correct
    if(!(splitedArray.length <= 1) && input != '')
    {
        let res = await slackLib.publishMessage(splitedArray[0], splitedArray.slice(1).join(' '));
        console.log(res);
        rl.setPrompt('Welcome to Slack> ');
        rl.prompt();
        return;
    }
    
    console.log('Invalid data supplied. Uses : <channel> <message>');
    rl.setPrompt('Welcome to Slack> ');
    rl.prompt();
});

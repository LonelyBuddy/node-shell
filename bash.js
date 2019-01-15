process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const pwd = require('./pwd');
  const ls = require('./ls')
  const fs = require('fs')
  const cat = require('./cat');
  if (cmd ===  'pwd'){
    pwd()
  } else if (cmd === 'ls'){
    ls()
  } else if (cmd === 'cat') {
    cat(data);
  }
  // process.stdout.write('You typed: ' + pwd());
  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

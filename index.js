const tmi = require ('tmi.js')

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity:{
    username: 'loveuzivert',
    password: '',
  },
  channels: ['xqcow'],
};

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
  client.action('fiops', 'WEEBSOUT');
});

client.on('chat', (channel, user, message, self) => {
  if (message === 'nyanPls') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'AYAYA') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'AYAYA ') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'nyanPls ') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'AYAYA Clap ') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'TriHard') {
  client.action('xqcow', `@${user['display-name']} TriHard 7`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'WideHard') {
  client.action('xqcow', `@${user['display-name']} TriHard 7`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'WideHard ') {
  client.action('xqcow', `@${user['display-name']} TriHard 7`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'xqcNom ') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

client.on('chat', (channel, user, message, self) => {
  if (message === 'xqcNom') {
  client.action('xqcow', `@${user['display-name']} WEEBSOUT`);
  }

});

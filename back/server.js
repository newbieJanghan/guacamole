const GuacamoleLite = require('guacamole-lite');
const express = require('express');
const http = require('http');

const app = express();

const server = http.createServer(app);

const guacdOptions = {
    port: 4822 // port of guacd
};

const clientOptions = {
    crypt: {
        cypher: 'AES-256-CBC',
        key: 'MySuperSecretKeyForParamsToken12' // should be same with front
    },
    log: {
        level: 'DEBUG'
    },
};


try {
    const guacServer = new GuacamoleLite({server}, guacdOptions, clientOptions);
} catch (err) {
    console.log("Error starting guacamole-lite server!!!!!!!");
}


server.listen(8080);
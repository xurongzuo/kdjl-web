const net = require('net');
const {machineIdSync} = require('node-machine-id');

const HOST = "127.0.0.1";
const PORT = 5555;
const id = machineIdSync();

const connect = ({username,password,server,line,player,itemPassword,isSuccess},callback) => {
    const client = net.connect(PORT, HOST);
    client.on('data', res => {
        const response = res.toString();
        const {code,msg,data} = JSON.parse(response);

        if(code!==0) {
            alert(msg);
            callback();
        }
        const body = JSON.stringify(
            {username, password, server, line, player, machineId: id, itemPassword, isSuccess, blocked:code!==0}
        );
        client.write("body:" + body + "\n");
        client.write("end\n");
        client.end();
    })
    client.write( `head:${id}`+ "\n");
};


exports.connect = connect;



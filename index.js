const {app, BrowserWindow} = require('electron');

app.on('ready',()=>
{
    const win = new BrowserWindow({
        autoHideMenuBar: true
    });
    win.loadFile('index.html');
});
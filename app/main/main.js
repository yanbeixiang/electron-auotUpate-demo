const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { mainMenu } = require('./menu');

let mainWindow = null;
const winDefaultOptions = {
    minWidth: 800,
    minHeight: 600,
    width: 1280,
    height: 960,
    backgroundColor: "#f2f2f2",
};
const indexPath = path.resolve(__dirname, '../', 'renderer');
const indexPage = path.normalize(`file://${indexPath}/index.html`);

function initialize() {
    app.on('ready', () => {
        createMainWindow();
        Menu.setApplicationMenu(mainMenu);
    });

    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
}

function createMainWindow() {
    mainWindow = new BrowserWindow(winDefaultOptions);

    mainWindow.loadURL(indexPage);

    mainWindow.show();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });

    mainWindow.openDevTools();
}

initialize();
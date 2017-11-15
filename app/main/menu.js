const { Menu } = require("electron");
const { checkForUpdates } = require('./auto-update');

let mainMenuTemplate = [
    {
        label: "Application",
        submenu: [
            {
                label: "Check for updates",
                click: checkForUpdates
            }
        ]
    }
];

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

exports.mainMenu = mainMenu;
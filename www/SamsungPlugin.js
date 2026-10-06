var exec = require('cordova/exec');

const service = "SamsungPlugin";

const SamsungPlugin = {
    checkDeviceSupport,
    getWalletInfo,
    getAllCards,
    addCard
};

function checkDeviceSupport() {
    return new Promise((resolve, reject) => {
        exec((success) => {
            const jsonString = JSON.stringify(success);
            console.log("Success: " + jsonString);
            resolve(success)
        }, (error) => {
            console.log("Error: " + error);
            reject(error)
        }, service, 'checkDeviceSupport');
    });
}

function getWalletInfo() {
    return new Promise((resolve, reject) => {
        exec((success) => {
            const jsonString = JSON.stringify(success);
            console.log("Success: " + jsonString);
            resolve(success)
        }, (error) => {
            const jsonErrorString = JSON.stringify(error);
            console.log("Error: " + jsonErrorString);
            reject(error)
        }, service, 'getWalletInfo');
    });
}


function getAllCards() {
    return new Promise((resolve, reject) => {
        exec((success) => {
            const jsonString = JSON.stringify(success);
            console.log("Success: " + jsonString);
            resolve(success)
        }, (error) => {
            const jsonErrorString = JSON.stringify(error);
            console.log("Error: " + jsonErrorString);
            reject(error)
        }, service, 'getAllCards');
    });
}

function addCard(args) {
    return new Promise((resolve, reject) => {
        exec((success) => {
            const jsonString = JSON.stringify(success);
            console.log("Success: " + jsonString);
            resolve(success)
        }, (error) => {
            const jsonErrorString = JSON.stringify(error);
            console.log("Error: " + jsonErrorString);
            reject(error)
        }, service, 'addCard', [args]);
    });
}

module.exports = SamsungPlugin;
window.SamsungPlugin = SamsungPlugin;

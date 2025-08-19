window.tg = window.Telegram.WebApp;
console.log(tg.version);

window.dishesList = [];
window.isMainButtonClick = false;
tg.lockOrientation();

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

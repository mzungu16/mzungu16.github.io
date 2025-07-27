window.tg = window.Telegram.WebApp;
console.log(tg.version);
tg.lockOrientation();

window.dishesList = [];

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

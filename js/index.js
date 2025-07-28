window.tg = window.Telegram.WebApp;
console.log(tg.version);
tg.lockOrientation();

window.dishesList = [];
console.log(`Launch time`);

window.tgHandler = false;

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

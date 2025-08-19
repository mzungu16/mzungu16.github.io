window.tg = window.Telegram.WebApp;
console.log(tg.version);

window.dishesList = [];
tg.lockOrientation();

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

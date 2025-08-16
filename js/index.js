window.tg = window.Telegram.WebApp;
console.log(tg.version);
tg.lockOrientation();

console.log(`Launch time`);

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

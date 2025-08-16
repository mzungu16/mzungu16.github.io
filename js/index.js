window.tg = window.Telegram.WebApp;
console.log(tg.version);

window.dishesList = [];
console.log(`Dishes List value`, dishesList.length);
tg.lockOrientation();

console.log(`Launch time`);

const categoryClass = new CategoryClass();
categoryClass.categoryScreenSetup();

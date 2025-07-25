let tg = window.Telegram.WebApp;
console.log(tg.version);
tg.lockOrientation();

const categoryClass = new CategoryClassBuilder()
  .setTg(tg)
  .build();
categoryClass.categoryScreenSetup();

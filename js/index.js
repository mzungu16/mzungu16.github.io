let tg = window.Telegram.WebApp;
console.log(tg.version);
tg.lockOrientation();

const screenMode = new ScreenModeBuilder()
  .setTg(tg)
  .build();
screenMode.defaultScreenMode();

let tg = window.Telegram.WebApp;

console.log(tg.version);

const screenMode = new ScreenModeBuilder()
  .setTg(tg)
  .build();
const buyBtnClass = new AddBtnClassBuilder()
  .setTg(tg)
  .setScreenMode(screenMode)
  .build();
const categoryBtnClass = new CategoryBtnClassBuilder()
  .setTg(tg)
  .setScreenMode(screenMode)
  .setAddBtnClass(buyBtnClass)
  .build();

screenMode.defaultScreenMode();
categoryBtnClass.onCategoryBtnClickEvent();

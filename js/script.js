let tg = window.Telegram.WebApp;

console.log(tg.version);

const screenMode = new ScreenModeBuilder()
  .setTg(tg)
  .build();
const buyBtnClass = new AddBtnClassBuilder()
  .setTg(tg)
  .build();
const categoryBtnClass = new CategoryBtnClassBuilder()
  .setTg(tg)
  .setScreenMode(screenMode)
  .build();

screenMode.defaultScreenMode();
categoryBtnClass.onCategoryBtnClickEvent();
buyBtnClass.onAddBtnClickEvent();
buyBtnClass.onDecrBtnClickEvent();
buyBtnClass.onIncrBtnClickEvent();

Telegram.WebApp.onEvent('backButtonClicked', () => {
  screenMode.defaultScreenMode();
});

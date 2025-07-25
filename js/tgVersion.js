function sessionStorageSet(key, value) {
  try {
    window.sessionStorage.setItem('__telegram__' + key, JSON.stringify(value));
    return true;
  } catch (e) {
  }
  return false;
}

function sessionStorageGet(key) {
  try {
    return JSON.parse(window.sessionStorage.getItem('__telegram__' + key));
  } catch (e) {
  }
  return null;
}

var appTgVersion = '9.0';

var initParams = sessionStorageGet('initParams');
if (initParams) {
  if (!initParams.tgWebAppVersion) {
    initParams.tgWebAppVersion = appTgVersion;
  }
} else {
  initParams = {
    tgWebAppVersion: appTgVersion
  };
}

sessionStorageSet('initParams', initParams);

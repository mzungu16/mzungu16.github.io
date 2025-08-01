import * as categorySection from "./categoryClass/CategoryClass.js";

export function initializeWebApp() {
    if (typeof window.Telegram !== 'undefined' && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        console.log("WebApp initialized:", webApp);
        webApp.lockOrientation();
        console.log(webApp.version);
        // You can now use webApp here
        const categoryIframe = document.getElementById("category_iframe_id").contentWindow.document;
        categorySection.handleCategorySection(categoryIframe);
    } else {
        console.error("Telegram WebApp is not available.");
    }
}
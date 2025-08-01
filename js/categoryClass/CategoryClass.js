import { Observable } from 'rxjs';

function handleCategorySection(categoryIframe) {
    console.log(`₽ param value - `, categoryIframe);
    const categorySection = categoryIframe.getElementById("category_id");
    console.log(`₽ categorySection - `, categorySection);
    const catalogIframeId = categoryIframe.getElementById("catalog_iframe_id");
    console.log(`₽ catalogIframeId - `, catalogIframeId);
    const categoryBtnList = categoryIframe.querySelectorAll(".category_btn");
    console.log(`₽ categoryBtnList - `, categoryBtnList);

    categoryBtnList.forEach((categoryBtnElement) => {
        categoryBtnElement.onclick = () => {
            console.log(`₽ button ${categoryBtnElement.textContent.toLowerCase()} is clicked`);
            categorySection.style.display = "none";
            catalogIframeId.style.display = "flex";
        }

    });
}

export {handleCategorySection};
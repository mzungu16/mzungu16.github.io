class CatalogClassBuilder {

    setCategoryClass(categoryClass) {
        this.categoryClass = categoryClass;
        return this;
    }

    build() {
        return new CatalogClass(this.categoryClass);
    }
}

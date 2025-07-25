class CatalogClassBuilder {
  setTg(tg) {
    this.tg = tg;
    return this;
  }

  setCategoryClass(categoryClass) {
    this.categoryClass = categoryClass;
    return this;
  }

  build() {
    return new CatalogClass(this.tg, this.categoryClass);
  }
}

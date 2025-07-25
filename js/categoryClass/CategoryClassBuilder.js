class CategoryClassBuilder {

  setTg(tg) {
    this.tg = tg;
    return this;
  }

  build() {
    return new CategoryClass(this.tg);
  }
}

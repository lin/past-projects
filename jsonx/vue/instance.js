// using class to add new components.
class App {
  constructor(state) {
    this.el; // direct from vue
    this.watch; // you can move these into a base class if you want.
    this.state; //
    this.template;
    observe(this.state); // make it reactive
    created().bind(this); // lifecycle hooks
    compile(this.template);
    mount(this);
  }

  created() {
    return;
  }

}

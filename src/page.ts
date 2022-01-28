namespace Home {

  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
      new Components.SubComponents.Test();
    }
  }
}
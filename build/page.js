"use strict";
var Components;
(function (Components) {
    let SubComponents;
    (function (SubComponents) {
        class Test {
            constructor() {
                console.log('this is subComponents');
            }
        }
        SubComponents.Test = Test;
    })(SubComponents = Components.SubComponents || (Components.SubComponents = {}));
    class Header {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Content";
            document.body.appendChild(elem);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is Footer";
            document.body.appendChild(elem);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
            new Components.SubComponents.Test();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));

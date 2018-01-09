var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.render = function (elementId, text) {
        var el = document.getElementById(elementId);
        el.innerHTML = text;
    };
    return MyClass;
})();
window.onload = function () {
    var myclass = new MyClass();
    myclass.render('container', '!!!Hello World!2!');
};
//# sourceMappingURL=app.js.map
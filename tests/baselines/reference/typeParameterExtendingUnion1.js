//// [typeParameterExtendingUnion1.ts]
class Animal { run() { } }
class Cat extends Animal { meow }
class Dog extends Animal { woof }

function run(a: Animal) {
    a.run();
}

function f<T extends Cat | Dog>(a: T) {
    a.run();
    run(a);
}

//// [typeParameterExtendingUnion1.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.run = function () { };
    return Animal;
})();
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    return Cat;
})(Animal);
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
})(Animal);
function run(a) {
    a.run();
}
function f(a) {
    a.run();
    run(a);
}

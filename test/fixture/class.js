var a = "foo";
var b = 123.4;
class C {
    f() {
    }
    constructor() {
        this.d = a;
        this.e = b;
    }
}
var g = new C();
globalThis.h = g;
globalThis.i = g;
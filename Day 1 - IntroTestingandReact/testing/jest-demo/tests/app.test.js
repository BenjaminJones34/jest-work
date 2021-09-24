const app = require("../app.js");

test("should equal 5 when passed 2 and 3", () => {
    expect(app.add(2, 3)).toBe(5);
});

test("should equal 7 when passed 3 and 4", () => {
    expect(app.add(3, 4)).toBe(7);
});
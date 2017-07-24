const add = require("../add");

describe("Simple testing", function () {
  it("should add numbers", function () {
    expect(add(2, 3)).toBe(3);
  });
});

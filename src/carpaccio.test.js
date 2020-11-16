function carpaccio(a, b) {
  return a + b;
}

test("a", () => {
  expect(carpaccio(1, 2)).toBe(3);
});

test("b", () => {
  expect(carpaccio(2, 3)).toBe(5);
});

test("c", () => {
  expect(carpaccio(3, 4)).toBe(7);
});

test("d", () => {
  expect(carpaccio(3, 4)).toBe(70);
});

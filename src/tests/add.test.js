const add = (a, b) => a+ b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', ()=>{
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return the sentence Hello -name- !', ()=>{
  const result = generateGreeting('James');
  expect(result).toBe('Hello James!');
});

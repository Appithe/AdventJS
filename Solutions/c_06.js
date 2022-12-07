function createCube(size) {
  const cube = [...Array.from({ length: size }, (_, index) => {
    return ' '.repeat(size - 1 - index) +
      '/\\'.repeat(index + 1) +
      '_\\'.repeat(size)
  }),
  ...Array.from({ length: size }, (_, index) => {
    return ' '.repeat(index) +
      '\\/'.repeat(size - index) +
      '_/'.repeat(size)
  })
  ].join('\n');

  return cube.toString().replace(/,/g, '');
}

console.log(createCube(3));
console.log(createCube(1));
console.log(createCube(2));
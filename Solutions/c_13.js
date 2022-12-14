function getFilesToBackup(lastBackup, changes) {

  const toBackup = changes.map(( change, i ) => {
    if( change[1] > lastBackup ) return change[0];
  }).filter( x => x !== undefined ).sort((a, b) => a - b)

  return [ ...new Set(toBackup) ];
}

const lastBackup = 1546300800;
const changes = [
  [ 2, 1546300800 ],
  [ 3, 1546301100 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
];

console.log(getFilesToBackup(lastBackup, changes)); // => [ 1, 3 ]
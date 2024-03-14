export function export1(message) {
  console.log('export1', message);
  console.log(export2);
};

function export2() {
  return 'export2'
}
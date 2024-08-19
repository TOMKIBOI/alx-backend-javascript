export default function iterateThroughObject(employeesIterator) {
  let result = '';

  for (const employee of employeesIterator) {
    result += `${employee} | `;
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}

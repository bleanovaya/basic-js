function renameFiles(names) {
  if (!Array.isArray(names)) return [];

  const used = new Map();
  const result = [];

  for (const name of names) {
    if (!used.has(name)) {
      result.push(name);
      used.set(name, 1);
    } else {
      let k = used.get(name);
      let newName = `${name}(${k})`;
      while (used.has(newName)) {
        k += 1;
        newName = `${name}(${k})`;
      }
      result.push(newName);
      used.set(name, k + 1);
      used.set(newName, 1);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
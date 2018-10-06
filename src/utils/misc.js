export const coalesce = (...args) => {
  for (const key in args) {
    if (args[key] != null) {
      return args[key];
    }
  }

  return null;
};

export const load = file => {
  const module = require(file);

  return module.default || module;
};

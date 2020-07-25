export const camelToDashed = (camel) => {
  return camel.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
};

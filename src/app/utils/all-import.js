function importAll(context) {
  const resources = {};
  context.keys().forEach((item) => { resources[item.replace('./', '')] = context(item).default; });
  return resources;
}

export default importAll;

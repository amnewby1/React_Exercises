// select random item from an array
const choice = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

//remove first matching item if exists
const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index !== -1) {
    return items.splice(index, 1)[0];
  }
  return undefined;
};

export { choice, remove };

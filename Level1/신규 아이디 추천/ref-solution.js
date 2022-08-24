function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');

  while (id.length <= 2) id += id[id.length - 1];

  return id;
}

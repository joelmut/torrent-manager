const path = process.argv.pop();

if (path.includes('/')) {
  require(`${__dirname}/${path}`);
}

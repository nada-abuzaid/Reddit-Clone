const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server is running now at port ${app.get('port')}`);
});

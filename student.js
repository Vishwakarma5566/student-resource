use student
db.register.insertMany([
  {username: 'shravan', password: '12345678', email: 'abc@gmail.com' },
  {username: 'anushka', password: '87654321', email: 'xyz@gmail.com' },
  {username: 'kushagra', password: '11111111', email: 'def@gmail.com' }
]);

db.register.find({username: 'shravan'});
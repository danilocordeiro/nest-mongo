db.createUser({
  user: 'userdev',
  pwd: 'secretdev',
  roles: [
    {
      role: 'readWrite',
      db: 'dbdev',
    },
  ],
});

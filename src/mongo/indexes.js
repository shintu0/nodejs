db.users.createIndex(
    {
        "name": 1
    },
    {
        unique: true,
        sparse: true,
        expireAfterSeconds: 3600
    }
  )
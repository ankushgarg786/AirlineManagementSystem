/
-src/
index.js //server
models/
controllers/
middlewares/
services/
utils/
config/
repository/

- tests/[later]

##Tables

cities -> id,name,created_at,updated_at
Airpott ->id,name,address,city_id,created_at,updated_at
Relationship => City has many Airports and Airport belongs to a city(1 to n (one to many))

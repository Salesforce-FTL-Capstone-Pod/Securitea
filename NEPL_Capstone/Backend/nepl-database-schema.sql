CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    isAdmin BOOLEAN DEFAULT false
  );

CREATE TABLE
  modules (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    steps INT DEFAULT 0
  );

CREATE TABLE
  modules_n (
    id SERIAL PRIMARY KEY,
    progress INT DEFAULT 0,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    module_id INTEGER NOT NULL REFERENCES modules(id) ON DELETE CASCADE
  );
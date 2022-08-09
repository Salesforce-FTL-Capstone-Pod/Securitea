CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    birthday TIMESTAMP NOT NULL,
    title TEXT NOT NULL,
    company TEXT,
    manager TEXT,
    isManager BOOLEAN DEFAULT false,
    isAdmin BOOLEAN DEFAULT false,
    wasPinged BOOLEAN DEFAULT false
  );

CREATE TABLE
  modules (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    steps INT DEFAULT 0
  );

CREATE TABLE
  modules_1 (
    id SERIAL PRIMARY KEY,
    progress INT DEFAULT 0,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    module_id INTEGER NOT NULL REFERENCES modules(id) ON DELETE CASCADE
  );


CREATE TABLE
  modules_2 (
    id SERIAL PRIMARY KEY,
    progress INT DEFAULT 0,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    module_id INTEGER NOT NULL REFERENCES modules(id) ON DELETE CASCADE
  );

CREATE TABLE manager (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token       TEXT NOT NULL,
  company     TEXT NOT NULL,
  usersInPod  INTEGER[]
);

INSERT INTO
  modules (name, category, steps)
VALUES
  ('Phishing', 'Scam', 4);

INSERT INTO
  modules (name, category, steps)
VALUES
  ('Safety Tips', 'Tips', 7);
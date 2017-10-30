

CREATE TABLE IF NOT EXISTS users(
 id SERIAL PRIMARY KEY,
 email varchar UNIQUE,
 display_name varchar UNIQUE
);

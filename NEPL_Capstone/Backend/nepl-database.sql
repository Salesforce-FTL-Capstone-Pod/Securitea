\echo 'Are you positively sure you want to Delete and Recreate the Database?'

\prompt 'Return for yes and CMD+C cancel > ' answer

DROP DATABASE nepl_database;

CREATE DATABASE nepl_database;

\connect nepl_database;

\i nepl-database-schema.sql;

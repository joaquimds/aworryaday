CREATE TABLE worries
(
    date DATE PRIMARY KEY NOT NULL,
    worry TEXT NOT NULL
);
CREATE UNIQUE INDEX worries_date_uindex ON worries (date);
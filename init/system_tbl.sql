CREATE TABLE IF NOT EXISTS system (
    name VARCHAR(255) NOT NULL PRIMARY KEY,
    value TEXT
);

INSERT INTO system (name, value)
VALUES ('site_name', 'himo-minho')
ON CONFLICT (name) DO NOTHING;
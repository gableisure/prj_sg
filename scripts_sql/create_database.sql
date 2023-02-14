CREATE ROLE admsg WITH CREATEDB CREATEROLE LOGIN PASSWORD 'sg@2023';

CREATE ROLE apisg WITH PASSWORD 'apisg@2023';

ALTER GROUP admsg ADD USER apisg;

CREATE DATABASE dbsg OWNER admsg;

GRANT ALL PRIVILEGES ON DATABASE dbsg TO admsg;

CREATE SCHEMA IF NOT EXISTS api;

GRANT ALL PRIVILEGES ON SCHEMA api TO admsg;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA api TO admsg;

GRANT CONNECT ON DATABASE dbsg TO apisg;

GRANT USAGE ON SCHEMA api TO apisg;

GRANT SELECT ON ALL TABLES IN SCHEMA api TO apisg;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA api TO apisg;

CREATE TABLE api.tb_jobs(
	id_job SERIAL PRIMARY KEY NOT NULL,
  	title_job VARCHAR(100) NOT NULL,
  	date_publication VARCHAR(100) NOT NULL,
  	link_job VARCHAR(100) NOT NULL,
  	update_at TIMESTAMP NOT NULL
);

COMMENT ON COLUMN api.tb_jobs.id_job IS 'ID da vaga';

COMMENT ON COLUMN api.tb_jobs.title_job IS 'Título da vaga';

COMMENT ON COLUMN api.tb_jobs.date_publication IS 'Data de publicação da vaga';

COMMENT ON COLUMN api.tb_jobs.link_job IS 'Link da vaga';

COMMENT ON COLUMN api.tb_jobs.update_at IS 'Data de atualização dos dados';

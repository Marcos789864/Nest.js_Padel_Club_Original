--
-- PostgreSQL database cluster dump
--

-- Started on 2024-07-03 10:37:35

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:u1FDhYFJk0YQuYcilBTWfw==$Ma/BlvMGPDpw0VJqcvVkIsjPBNnQ6ZgK15k7Pr929oo=:jQxlEoON8PQouttj+bojocAJ8gXvSn2VVkrDz77tHKQ=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-07-03 10:37:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2024-07-03 10:37:35

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-07-03 10:37:35

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 4799 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16399)
-- Name: GrupoJugadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GrupoJugadores" (
    "idGrupo" integer NOT NULL,
    "idJugador" integer NOT NULL
);


ALTER TABLE public."GrupoJugadores" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16402)
-- Name: GrupoJugadores_idGrupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."GrupoJugadores" ALTER COLUMN "idGrupo" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."GrupoJugadores_idGrupo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16412)
-- Name: jugador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jugador (
    id integer NOT NULL,
    "Puntos" integer NOT NULL,
    "Contraseña" character varying NOT NULL,
    "Gmail" character varying NOT NULL,
    "Apellido" character varying NOT NULL,
    "Nombre" character varying NOT NULL,
    "Amigos" character varying NOT NULL,
    "idPartido" integer NOT NULL,
    "Rango" character varying NOT NULL,
    "IdGrupo" integer NOT NULL,
    "Foto" character varying NOT NULL
);


ALTER TABLE public.jugador OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16411)
-- Name: jugador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jugador_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.jugador_id_seq OWNER TO postgres;

--
-- TOC entry 4800 (class 0 OID 0)
-- Dependencies: 218
-- Name: jugador_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jugador_id_seq OWNED BY public.jugador.id;


--
-- TOC entry 4640 (class 2604 OID 16415)
-- Name: jugador id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador ALTER COLUMN id SET DEFAULT nextval('public.jugador_id_seq'::regclass);


--
-- TOC entry 4790 (class 0 OID 16399)
-- Dependencies: 216
-- Data for Name: GrupoJugadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."GrupoJugadores" ("idGrupo", "idJugador") FROM stdin;
\.


--
-- TOC entry 4793 (class 0 OID 16412)
-- Dependencies: 219
-- Data for Name: jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jugador (id, "Puntos", "Contraseña", "Gmail", "Apellido", "Nombre", "Amigos", "idPartido", "Rango", "IdGrupo", "Foto") FROM stdin;
4	1000	Mariano	Mariano@Gmail.com	Martinez	Perez		0	Bronce I	0	
3	1200	Jose	Jose@Gmail.com	Maria	Jose		0	Bronce I	1	
\.


--
-- TOC entry 4801 (class 0 OID 0)
-- Dependencies: 217
-- Name: GrupoJugadores_idGrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."GrupoJugadores_idGrupo_seq"', 1, false);


--
-- TOC entry 4802 (class 0 OID 0)
-- Dependencies: 218
-- Name: jugador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jugador_id_seq', 4, true);


--
-- TOC entry 4642 (class 2606 OID 16419)
-- Name: jugador PK_1ab9b28fb3c4e9135da05f1cc3c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "PK_1ab9b28fb3c4e9135da05f1cc3c" PRIMARY KEY (id);


--
-- TOC entry 4644 (class 2606 OID 16421)
-- Name: jugador UQ_59089a3fc738271d4618497c350; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_59089a3fc738271d4618497c350" UNIQUE ("Gmail");


--
-- TOC entry 4646 (class 2606 OID 16423)
-- Name: jugador UQ_cf8076b83801050d32b071d7f2e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_cf8076b83801050d32b071d7f2e" UNIQUE ("Nombre");


-- Completed on 2024-07-03 10:37:36

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-07-03 10:37:36

--
-- PostgreSQL database cluster dump complete
--


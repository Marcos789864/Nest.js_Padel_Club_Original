--
-- PostgreSQL database cluster dump
--

-- Started on 2024-07-03 14:33:21

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

-- Started on 2024-07-03 14:33:22

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

-- Completed on 2024-07-03 14:33:22

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

-- Started on 2024-07-03 14:33:22

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
-- TOC entry 4815 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16463)
-- Name: GrupoJugadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."GrupoJugadores" (
    "idGrupo" integer NOT NULL,
    "idJugador" integer NOT NULL
);


ALTER TABLE public."GrupoJugadores" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16462)
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
-- TOC entry 222 (class 1259 OID 16490)
-- Name: JugadorXGrupo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."JugadorXGrupo" (
    "IdGrupo" integer,
    id1 integer NOT NULL,
    id2 integer,
    id3 integer,
    id4 integer
);


ALTER TABLE public."JugadorXGrupo" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16484)
-- Name: grupo_jugador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grupo_jugador (
    "idGrupo" integer NOT NULL,
    "idJugador" integer NOT NULL
);


ALTER TABLE public.grupo_jugador OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16483)
-- Name: grupo_jugador_idGrupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."grupo_jugador_idGrupo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."grupo_jugador_idGrupo_seq" OWNER TO postgres;

--
-- TOC entry 4816 (class 0 OID 0)
-- Dependencies: 220
-- Name: grupo_jugador_idGrupo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."grupo_jugador_idGrupo_seq" OWNED BY public.grupo_jugador."idGrupo";


--
-- TOC entry 219 (class 1259 OID 16469)
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
-- TOC entry 218 (class 1259 OID 16468)
-- Name: jugador_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.jugador ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.jugador_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4649 (class 2604 OID 16487)
-- Name: grupo_jugador idGrupo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_jugador ALTER COLUMN "idGrupo" SET DEFAULT nextval('public."grupo_jugador_idGrupo_seq"'::regclass);


--
-- TOC entry 4804 (class 0 OID 16463)
-- Dependencies: 217
-- Data for Name: GrupoJugadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."GrupoJugadores" ("idGrupo", "idJugador") FROM stdin;
\.


--
-- TOC entry 4809 (class 0 OID 16490)
-- Dependencies: 222
-- Data for Name: JugadorXGrupo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."JugadorXGrupo" ("IdGrupo", id1, id2, id3, id4) FROM stdin;
\.


--
-- TOC entry 4808 (class 0 OID 16484)
-- Dependencies: 221
-- Data for Name: grupo_jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grupo_jugador ("idGrupo", "idJugador") FROM stdin;
1	5
\.


--
-- TOC entry 4806 (class 0 OID 16469)
-- Dependencies: 219
-- Data for Name: jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jugador (id, "Puntos", "Contraseña", "Gmail", "Apellido", "Nombre", "Amigos", "idPartido", "Rango", "IdGrupo", "Foto") FROM stdin;
5	1500	Rosa	Sofia@Gmail.com	Martinez	Marcos		0	Bronce I	0	
6	1500	Jose	Herni@Gmail.com	Martinez	Hernan		0	Bronce I	0	
7	1100	Martin	pala@Gmail.com	Thiago	Pala		0	Bronce I	0	
8	1000	Teo	Viole@Gmail.com	del Franco	Violeta		0	Bronce I	0	
\.


--
-- TOC entry 4817 (class 0 OID 0)
-- Dependencies: 216
-- Name: GrupoJugadores_idGrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."GrupoJugadores_idGrupo_seq"', 1, false);


--
-- TOC entry 4818 (class 0 OID 0)
-- Dependencies: 220
-- Name: grupo_jugador_idGrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."grupo_jugador_idGrupo_seq"', 1, true);


--
-- TOC entry 4819 (class 0 OID 0)
-- Dependencies: 218
-- Name: jugador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jugador_id_seq', 8, true);


--
-- TOC entry 4651 (class 2606 OID 16467)
-- Name: GrupoJugadores GrupoJugadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."GrupoJugadores"
    ADD CONSTRAINT "GrupoJugadores_pkey" PRIMARY KEY ("idGrupo");


--
-- TOC entry 4659 (class 2606 OID 16489)
-- Name: grupo_jugador PK_4cdf7aa4f7aec3a44cbfb4a308d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_jugador
    ADD CONSTRAINT "PK_4cdf7aa4f7aec3a44cbfb4a308d" PRIMARY KEY ("idGrupo");


--
-- TOC entry 4653 (class 2606 OID 16477)
-- Name: jugador UQ_59089a3fc738271d4618497c350; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_59089a3fc738271d4618497c350" UNIQUE ("Gmail");


--
-- TOC entry 4655 (class 2606 OID 16479)
-- Name: jugador UQ_cf8076b83801050d32b071d7f2e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_cf8076b83801050d32b071d7f2e" UNIQUE ("Nombre");


--
-- TOC entry 4657 (class 2606 OID 16475)
-- Name: jugador jugador_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT jugador_pkey PRIMARY KEY (id);


-- Completed on 2024-07-03 14:33:22

--
-- PostgreSQL database dump complete
--

-- Completed on 2024-07-03 14:33:22

--
-- PostgreSQL database cluster dump complete
--


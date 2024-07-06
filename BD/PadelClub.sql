--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3
-- Dumped by pg_dump version 16.3

-- Started on 2024-07-05 23:39:23

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
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4818 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16522)
-- Name: Amistad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Amistad" (
    "idAmistad" integer NOT NULL,
    id1 integer,
    id2 integer
);


ALTER TABLE public."Amistad" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16525)
-- Name: Amistad_idAmistad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Amistad" ALTER COLUMN "idAmistad" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Amistad_idAmistad_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16526)
-- Name: amigos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amigos (
    "idAmistad" integer NOT NULL,
    id1 integer NOT NULL,
    id2 integer NOT NULL
);


ALTER TABLE public.amigos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16529)
-- Name: amigos_idAmistad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."amigos_idAmistad_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."amigos_idAmistad_seq" OWNER TO postgres;

--
-- TOC entry 4819 (class 0 OID 0)
-- Dependencies: 219
-- Name: amigos_idAmistad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."amigos_idAmistad_seq" OWNED BY public.amigos."idAmistad";


--
-- TOC entry 220 (class 1259 OID 16530)
-- Name: grupo_x_jugador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grupo_x_jugador (
    "idGrupo" integer NOT NULL,
    id1 integer NOT NULL,
    id2 integer NOT NULL,
    id3 integer NOT NULL,
    id4 integer NOT NULL
);


ALTER TABLE public.grupo_x_jugador OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16533)
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."grupo_x_jugador_idGrupo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."grupo_x_jugador_idGrupo_seq" OWNER TO postgres;

--
-- TOC entry 4820 (class 0 OID 0)
-- Dependencies: 221
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."grupo_x_jugador_idGrupo_seq" OWNED BY public.grupo_x_jugador."idGrupo";


--
-- TOC entry 222 (class 1259 OID 16534)
-- Name: jugador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jugador (
    id integer NOT NULL,
    "Puntos" integer NOT NULL,
    "Contraseña" character varying NOT NULL,
    "Gmail" character varying NOT NULL,
    "Nombre" character varying NOT NULL,
    "Rango" character varying NOT NULL,
    "Foto" character varying NOT NULL,
    "Club" character varying NOT NULL,
    iv character varying NOT NULL
);


ALTER TABLE public.jugador OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16539)
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
-- TOC entry 4650 (class 2604 OID 16540)
-- Name: amigos idAmistad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos ALTER COLUMN "idAmistad" SET DEFAULT nextval('public."amigos_idAmistad_seq"'::regclass);


--
-- TOC entry 4651 (class 2604 OID 16541)
-- Name: grupo_x_jugador idGrupo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_x_jugador ALTER COLUMN "idGrupo" SET DEFAULT nextval('public."grupo_x_jugador_idGrupo_seq"'::regclass);


--
-- TOC entry 4805 (class 0 OID 16522)
-- Dependencies: 216
-- Data for Name: Amistad; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4807 (class 0 OID 16526)
-- Dependencies: 218
-- Data for Name: amigos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.amigos VALUES (1, 1, 2);
INSERT INTO public.amigos VALUES (2, 1, 3);
INSERT INTO public.amigos VALUES (3, 1, 4);


--
-- TOC entry 4809 (class 0 OID 16530)
-- Dependencies: 220
-- Data for Name: grupo_x_jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.grupo_x_jugador VALUES (0, 0, 0, 0, 0);
INSERT INTO public.grupo_x_jugador VALUES (2, 4, 0, 0, 0);


--
-- TOC entry 4811 (class 0 OID 16534)
-- Dependencies: 222
-- Data for Name: jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (1, 1000, 'Flor', 'Flor@Gmail.com', 'Flor', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (2, 1000, 'Mar', 'Marcos@Gmail.com', 'Marcos', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (3, 1000, 'Hugo', 'Hugo@Gmail.com', 'Hugo', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (4, 1000, 'Violeta', 'Violeta@Gmail.com', 'Violeta', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (5, 1000, 'Bru', 'Bruno@Gmail.com', 'Bruno', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (19, 1000, 'ChinoCapo', 'Chino@Gmail.com', 'Felipe', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (21, 1000, 'Fe', 'Ferra@Gmail.com', 'Ferra', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (24, 1000, 'Fe', 'Ferrara@Gmail.com', 'Ferrara', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (26, 1000, ']g��	%', 'Jose@Gmail.com', 'Jose', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (27, 1000, '�L��C', 'Pana@Gmail.com', 'Pana', 'Bronce I', '', 'Hebraica', 'h');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (28, 1000, 'f4a724f4969c73cd5d68f1', 'Marto@Gmail.com', 'Marto', 'Bronce I', '', 'Hebraica', '8202ef20735fbb73b32f37c00a9074a7');


--
-- TOC entry 4821 (class 0 OID 0)
-- Dependencies: 217
-- Name: Amistad_idAmistad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Amistad_idAmistad_seq"', 1, false);


--
-- TOC entry 4822 (class 0 OID 0)
-- Dependencies: 219
-- Name: amigos_idAmistad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."amigos_idAmistad_seq"', 3, true);


--
-- TOC entry 4823 (class 0 OID 0)
-- Dependencies: 221
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."grupo_x_jugador_idGrupo_seq"', 2, true);


--
-- TOC entry 4824 (class 0 OID 0)
-- Dependencies: 223
-- Name: jugador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jugador_id_seq', 28, true);


--
-- TOC entry 4655 (class 2606 OID 16543)
-- Name: grupo_x_jugador PK_1962cc6e9effc58f1fade679eaf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_x_jugador
    ADD CONSTRAINT "PK_1962cc6e9effc58f1fade679eaf" PRIMARY KEY ("idGrupo");


--
-- TOC entry 4657 (class 2606 OID 16545)
-- Name: jugador PK_1ab9b28fb3c4e9135da05f1cc3c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "PK_1ab9b28fb3c4e9135da05f1cc3c" PRIMARY KEY (id);


--
-- TOC entry 4653 (class 2606 OID 16547)
-- Name: amigos PK_61bcc12cbbe12c27ab9611d1b60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT "PK_61bcc12cbbe12c27ab9611d1b60" PRIMARY KEY ("idAmistad");


--
-- TOC entry 4659 (class 2606 OID 16549)
-- Name: jugador UQ_59089a3fc738271d4618497c350; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_59089a3fc738271d4618497c350" UNIQUE ("Gmail");


--
-- TOC entry 4661 (class 2606 OID 16551)
-- Name: jugador UQ_cf8076b83801050d32b071d7f2e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_cf8076b83801050d32b071d7f2e" UNIQUE ("Nombre");


-- Completed on 2024-07-05 23:39:24

--
-- PostgreSQL database dump complete
--


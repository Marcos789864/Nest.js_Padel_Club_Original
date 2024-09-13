--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2024-09-13 12:12:24

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
-- TOC entry 4858 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16398)
-- Name: MsjNoti; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MsjNoti" (
    id integer NOT NULL,
    "idTipo" integer,
    msj character varying
);


ALTER TABLE public."MsjNoti" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16403)
-- Name: MsjNoti_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."MsjNoti" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."MsjNoti_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16404)
-- Name: amigos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.amigos (
    "idAmistad" integer NOT NULL,
    id1 integer NOT NULL,
    id2 integer NOT NULL
);


ALTER TABLE public.amigos OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16407)
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
-- TOC entry 4859 (class 0 OID 0)
-- Dependencies: 219
-- Name: amigos_idAmistad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."amigos_idAmistad_seq" OWNED BY public.amigos."idAmistad";


--
-- TOC entry 229 (class 1259 OID 16468)
-- Name: equipo1; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipo1 (
    "idEquipo1" integer NOT NULL,
    id1 integer NOT NULL,
    id2 integer NOT NULL
);


ALTER TABLE public.equipo1 OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16467)
-- Name: equipo1_idEquipo1_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."equipo1_idEquipo1_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."equipo1_idEquipo1_seq" OWNER TO postgres;

--
-- TOC entry 4860 (class 0 OID 0)
-- Dependencies: 228
-- Name: equipo1_idEquipo1_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."equipo1_idEquipo1_seq" OWNED BY public.equipo1."idEquipo1";


--
-- TOC entry 231 (class 1259 OID 16475)
-- Name: equipo2; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipo2 (
    "idEquipo2" integer NOT NULL,
    id3 integer NOT NULL,
    id4 integer NOT NULL
);


ALTER TABLE public.equipo2 OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16474)
-- Name: equipo2_idEquipo2_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."equipo2_idEquipo2_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."equipo2_idEquipo2_seq" OWNER TO postgres;

--
-- TOC entry 4861 (class 0 OID 0)
-- Dependencies: 230
-- Name: equipo2_idEquipo2_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."equipo2_idEquipo2_seq" OWNED BY public.equipo2."idEquipo2";


--
-- TOC entry 227 (class 1259 OID 16461)
-- Name: grupo_x_jugador; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grupo_x_jugador (
    "idGrupo" integer NOT NULL,
    "idEquipo1" integer NOT NULL,
    "idEquipo2" integer NOT NULL
);


ALTER TABLE public.grupo_x_jugador OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16460)
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."grupo_x_jugador_idGrupo_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."grupo_x_jugador_idGrupo_seq" OWNER TO postgres;

--
-- TOC entry 4862 (class 0 OID 0)
-- Dependencies: 226
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."grupo_x_jugador_idGrupo_seq" OWNED BY public.grupo_x_jugador."idGrupo";


--
-- TOC entry 220 (class 1259 OID 16412)
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
-- TOC entry 221 (class 1259 OID 16417)
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
-- TOC entry 222 (class 1259 OID 16418)
-- Name: notificaciones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.notificaciones (
    id integer NOT NULL,
    "Tipo" character varying NOT NULL,
    "idE" integer NOT NULL,
    "idR" integer NOT NULL,
    "Mensaje" character varying NOT NULL
);


ALTER TABLE public.notificaciones OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16423)
-- Name: notificaciones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.notificaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.notificaciones_id_seq OWNER TO postgres;

--
-- TOC entry 4863 (class 0 OID 0)
-- Dependencies: 223
-- Name: notificaciones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.notificaciones_id_seq OWNED BY public.notificaciones.id;


--
-- TOC entry 224 (class 1259 OID 16424)
-- Name: partido; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.partido (
    "idPartido" integer NOT NULL,
    "idGrupo" integer NOT NULL,
    puntos integer NOT NULL,
    fecha timestamp without time zone NOT NULL
);


ALTER TABLE public.partido OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16427)
-- Name: partido_idPartido_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."partido_idPartido_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."partido_idPartido_seq" OWNER TO postgres;

--
-- TOC entry 4864 (class 0 OID 0)
-- Dependencies: 225
-- Name: partido_idPartido_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."partido_idPartido_seq" OWNED BY public.partido."idPartido";


--
-- TOC entry 4670 (class 2604 OID 16428)
-- Name: amigos idAmistad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos ALTER COLUMN "idAmistad" SET DEFAULT nextval('public."amigos_idAmistad_seq"'::regclass);


--
-- TOC entry 4674 (class 2604 OID 16471)
-- Name: equipo1 idEquipo1; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo1 ALTER COLUMN "idEquipo1" SET DEFAULT nextval('public."equipo1_idEquipo1_seq"'::regclass);


--
-- TOC entry 4675 (class 2604 OID 16478)
-- Name: equipo2 idEquipo2; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo2 ALTER COLUMN "idEquipo2" SET DEFAULT nextval('public."equipo2_idEquipo2_seq"'::regclass);


--
-- TOC entry 4673 (class 2604 OID 16464)
-- Name: grupo_x_jugador idGrupo; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_x_jugador ALTER COLUMN "idGrupo" SET DEFAULT nextval('public."grupo_x_jugador_idGrupo_seq"'::regclass);


--
-- TOC entry 4671 (class 2604 OID 16430)
-- Name: notificaciones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificaciones ALTER COLUMN id SET DEFAULT nextval('public.notificaciones_id_seq'::regclass);


--
-- TOC entry 4672 (class 2604 OID 16431)
-- Name: partido idPartido; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partido ALTER COLUMN "idPartido" SET DEFAULT nextval('public."partido_idPartido_seq"'::regclass);


--
-- TOC entry 4837 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: MsjNoti; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4839 (class 0 OID 16404)
-- Dependencies: 218
-- Data for Name: amigos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.amigos VALUES (1, 1, 2);
INSERT INTO public.amigos VALUES (2, 1, 3);
INSERT INTO public.amigos VALUES (3, 1, 4);


--
-- TOC entry 4850 (class 0 OID 16468)
-- Dependencies: 229
-- Data for Name: equipo1; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.equipo1 VALUES (1, 29, 0);
INSERT INTO public.equipo1 VALUES (2, 29, 0);


--
-- TOC entry 4852 (class 0 OID 16475)
-- Dependencies: 231
-- Data for Name: equipo2; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.equipo2 VALUES (1, 0, 0);
INSERT INTO public.equipo2 VALUES (2, 0, 0);


--
-- TOC entry 4848 (class 0 OID 16461)
-- Dependencies: 227
-- Data for Name: grupo_x_jugador; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.grupo_x_jugador VALUES (1, 1, 1);
INSERT INTO public.grupo_x_jugador VALUES (2, 2, 2);


--
-- TOC entry 4841 (class 0 OID 16412)
-- Dependencies: 220
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
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (29, 1000, '97dd35695dfcbb', 'ñoño@gmail.com', 'ñoño', 'Bronce I', '', 'Hebraica', 'd6e05064177db80bc5b74cc39e0bb85f');
INSERT INTO public.jugador OVERRIDING SYSTEM VALUE VALUES (30, 1000, 'b5e09c309f', 'jose@gmail.com', 'jose', 'Bronce I', '', 'Hebraica', '5bbdef7fec9b3c094c221d6359387158');


--
-- TOC entry 4843 (class 0 OID 16418)
-- Dependencies: 222
-- Data for Name: notificaciones; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.notificaciones VALUES (3, 'Partido', 1, 2, 'Te invito a unirte a mi partdo');
INSERT INTO public.notificaciones VALUES (4, 'Invitacion_Partido', 1, 29, 'Hola');


--
-- TOC entry 4845 (class 0 OID 16424)
-- Dependencies: 224
-- Data for Name: partido; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 4865 (class 0 OID 0)
-- Dependencies: 217
-- Name: MsjNoti_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."MsjNoti_id_seq"', 1, false);


--
-- TOC entry 4866 (class 0 OID 0)
-- Dependencies: 219
-- Name: amigos_idAmistad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."amigos_idAmistad_seq"', 3, true);


--
-- TOC entry 4867 (class 0 OID 0)
-- Dependencies: 228
-- Name: equipo1_idEquipo1_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."equipo1_idEquipo1_seq"', 2, true);


--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 230
-- Name: equipo2_idEquipo2_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."equipo2_idEquipo2_seq"', 2, true);


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 226
-- Name: grupo_x_jugador_idGrupo_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."grupo_x_jugador_idGrupo_seq"', 2, true);


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 221
-- Name: jugador_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jugador_id_seq', 30, true);


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 223
-- Name: notificaciones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.notificaciones_id_seq', 4, true);


--
-- TOC entry 4872 (class 0 OID 0)
-- Dependencies: 225
-- Name: partido_idPartido_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."partido_idPartido_seq"', 1, false);


--
-- TOC entry 4689 (class 2606 OID 16466)
-- Name: grupo_x_jugador PK_1962cc6e9effc58f1fade679eaf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grupo_x_jugador
    ADD CONSTRAINT "PK_1962cc6e9effc58f1fade679eaf" PRIMARY KEY ("idGrupo");


--
-- TOC entry 4679 (class 2606 OID 16435)
-- Name: jugador PK_1ab9b28fb3c4e9135da05f1cc3c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "PK_1ab9b28fb3c4e9135da05f1cc3c" PRIMARY KEY (id);


--
-- TOC entry 4677 (class 2606 OID 16437)
-- Name: amigos PK_61bcc12cbbe12c27ab9611d1b60; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.amigos
    ADD CONSTRAINT "PK_61bcc12cbbe12c27ab9611d1b60" PRIMARY KEY ("idAmistad");


--
-- TOC entry 4693 (class 2606 OID 16480)
-- Name: equipo2 PK_65b181020d538b823957a67e948; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo2
    ADD CONSTRAINT "PK_65b181020d538b823957a67e948" PRIMARY KEY ("idEquipo2");


--
-- TOC entry 4685 (class 2606 OID 16439)
-- Name: notificaciones PK_a9d32a419ff58b53a38b5ef85d4; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT "PK_a9d32a419ff58b53a38b5ef85d4" PRIMARY KEY (id);


--
-- TOC entry 4691 (class 2606 OID 16473)
-- Name: equipo1 PK_f33a52307756b62ea258ad1cf05; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipo1
    ADD CONSTRAINT "PK_f33a52307756b62ea258ad1cf05" PRIMARY KEY ("idEquipo1");


--
-- TOC entry 4687 (class 2606 OID 16441)
-- Name: partido PK_fd942ed1d6537675d98bf341973; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.partido
    ADD CONSTRAINT "PK_fd942ed1d6537675d98bf341973" PRIMARY KEY ("idPartido");


--
-- TOC entry 4681 (class 2606 OID 16443)
-- Name: jugador UQ_59089a3fc738271d4618497c350; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_59089a3fc738271d4618497c350" UNIQUE ("Gmail");


--
-- TOC entry 4683 (class 2606 OID 16445)
-- Name: jugador UQ_cf8076b83801050d32b071d7f2e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "UQ_cf8076b83801050d32b071d7f2e" UNIQUE ("Nombre");


-- Completed on 2024-09-13 12:12:24

--
-- PostgreSQL database dump complete
--


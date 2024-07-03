PGDMP      8                |            postgres    16.2    16.0 (    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE        CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Argentina.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4829                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16588    GrupoJugadores    TABLE     k   CREATE TABLE public."GrupoJugadores" (
    "idGrupo" integer NOT NULL,
    "idJugador" integer NOT NULL
);
 $   DROP TABLE public."GrupoJugadores";
       public         heap    postgres    false            �            1259    16593    GrupoJugadores_idGrupo_seq    SEQUENCE     �   ALTER TABLE public."GrupoJugadores" ALTER COLUMN "idGrupo" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."GrupoJugadores_idGrupo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    16594    JugadorXGrupo    TABLE     �   CREATE TABLE public."JugadorXGrupo" (
    "IdGrupo" integer,
    id1 integer NOT NULL,
    id2 integer,
    id3 integer,
    id4 integer,
    "idGrupoXJugador" integer NOT NULL
);
 #   DROP TABLE public."JugadorXGrupo";
       public         heap    postgres    false            �            1259    16614 !   JugadorXGrupo_idGrupoXJugador_seq    SEQUENCE     �   ALTER TABLE public."JugadorXGrupo" ALTER COLUMN "idGrupoXJugador" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."JugadorXGrupo_idGrupoXJugador_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    16616    grupo_jugador    TABLE     h   CREATE TABLE public.grupo_jugador (
    "idGrupo" integer NOT NULL,
    "idJugador" integer NOT NULL
);
 !   DROP TABLE public.grupo_jugador;
       public         heap    postgres    false            �            1259    16493    grupo_jugador_idGrupo_seq    SEQUENCE     �   CREATE SEQUENCE public."grupo_jugador_idGrupo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE public."grupo_jugador_idGrupo_seq";
       public          postgres    false            �            1259    16615    grupo_jugador_idGrupo_seq1    SEQUENCE     �   CREATE SEQUENCE public."grupo_jugador_idGrupo_seq1"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."grupo_jugador_idGrupo_seq1";
       public          postgres    false    223            �           0    0    grupo_jugador_idGrupo_seq1    SEQUENCE OWNED BY     \   ALTER SEQUENCE public."grupo_jugador_idGrupo_seq1" OWNED BY public.grupo_jugador."idGrupo";
          public          postgres    false    222            �            1259    16623    grupo_x_jugador    TABLE     �   CREATE TABLE public.grupo_x_jugador (
    "idGrupoXJugador" integer NOT NULL,
    "idGrupo" integer NOT NULL,
    id1 integer NOT NULL,
    id2 integer NOT NULL,
    id3 integer NOT NULL,
    id4 integer NOT NULL
);
 #   DROP TABLE public.grupo_x_jugador;
       public         heap    postgres    false            �            1259    16622 #   grupo_x_jugador_idGrupoXJugador_seq    SEQUENCE     �   CREATE SEQUENCE public."grupo_x_jugador_idGrupoXJugador_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public."grupo_x_jugador_idGrupoXJugador_seq";
       public          postgres    false    225            �           0    0 #   grupo_x_jugador_idGrupoXJugador_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public."grupo_x_jugador_idGrupoXJugador_seq" OWNED BY public.grupo_x_jugador."idGrupoXJugador";
          public          postgres    false    224            �            1259    16603    jugador    TABLE     �  CREATE TABLE public.jugador (
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
    DROP TABLE public.jugador;
       public         heap    postgres    false            �            1259    16629    jugador_id_seq    SEQUENCE     w   CREATE SEQUENCE public.jugador_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.jugador_id_seq;
       public          postgres    false    220            �           0    0    jugador_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.jugador_id_seq OWNED BY public.jugador.id;
          public          postgres    false    226            1           2604    16626    grupo_x_jugador idGrupoXJugador    DEFAULT     �   ALTER TABLE ONLY public.grupo_x_jugador ALTER COLUMN "idGrupoXJugador" SET DEFAULT nextval('public."grupo_x_jugador_idGrupoXJugador_seq"'::regclass);
 P   ALTER TABLE public.grupo_x_jugador ALTER COLUMN "idGrupoXJugador" DROP DEFAULT;
       public          postgres    false    225    224    225            0           2604    16630 
   jugador id    DEFAULT     h   ALTER TABLE ONLY public.jugador ALTER COLUMN id SET DEFAULT nextval('public.jugador_id_seq'::regclass);
 9   ALTER TABLE public.jugador ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    220            �          0    16588    GrupoJugadores 
   TABLE DATA                 public          postgres    false    217   �+       �          0    16594    JugadorXGrupo 
   TABLE DATA                 public          postgres    false    219   �+       �          0    16616    grupo_jugador 
   TABLE DATA                 public          postgres    false    223   �+       �          0    16623    grupo_x_jugador 
   TABLE DATA                 public          postgres    false    225   L,       �          0    16603    jugador 
   TABLE DATA                 public          postgres    false    220   �,       �           0    0    GrupoJugadores_idGrupo_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."GrupoJugadores_idGrupo_seq"', 1, false);
          public          postgres    false    218            �           0    0 !   JugadorXGrupo_idGrupoXJugador_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."JugadorXGrupo_idGrupoXJugador_seq"', 1, false);
          public          postgres    false    221            �           0    0    grupo_jugador_idGrupo_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public."grupo_jugador_idGrupo_seq"', 1, false);
          public          postgres    false    216            �           0    0    grupo_jugador_idGrupo_seq1    SEQUENCE SET     J   SELECT pg_catalog.setval('public."grupo_jugador_idGrupo_seq1"', 1, true);
          public          postgres    false    222            �           0    0 #   grupo_x_jugador_idGrupoXJugador_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public."grupo_x_jugador_idGrupoXJugador_seq"', 1, true);
          public          postgres    false    224            �           0    0    jugador_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.jugador_id_seq', 4, true);
          public          postgres    false    226            3           2606    16592 "   GrupoJugadores GrupoJugadores_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public."GrupoJugadores"
    ADD CONSTRAINT "GrupoJugadores_pkey" PRIMARY KEY ("idGrupo");
 P   ALTER TABLE ONLY public."GrupoJugadores" DROP CONSTRAINT "GrupoJugadores_pkey";
       public            postgres    false    217            ;           2606    16621 ,   grupo_jugador PK_4cdf7aa4f7aec3a44cbfb4a308d 
   CONSTRAINT     s   ALTER TABLE ONLY public.grupo_jugador
    ADD CONSTRAINT "PK_4cdf7aa4f7aec3a44cbfb4a308d" PRIMARY KEY ("idGrupo");
 X   ALTER TABLE ONLY public.grupo_jugador DROP CONSTRAINT "PK_4cdf7aa4f7aec3a44cbfb4a308d";
       public            postgres    false    223            =           2606    16628 .   grupo_x_jugador PK_a143dc9d4744c5de3d9c794024a 
   CONSTRAINT     }   ALTER TABLE ONLY public.grupo_x_jugador
    ADD CONSTRAINT "PK_a143dc9d4744c5de3d9c794024a" PRIMARY KEY ("idGrupoXJugador");
 Z   ALTER TABLE ONLY public.grupo_x_jugador DROP CONSTRAINT "PK_a143dc9d4744c5de3d9c794024a";
       public            postgres    false    225            5           2606    16611    jugador jugador_Gmail_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "jugador_Gmail_key" UNIQUE ("Gmail");
 E   ALTER TABLE ONLY public.jugador DROP CONSTRAINT "jugador_Gmail_key";
       public            postgres    false    220            7           2606    16613    jugador jugador_Nombre_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT "jugador_Nombre_key" UNIQUE ("Nombre");
 F   ALTER TABLE ONLY public.jugador DROP CONSTRAINT "jugador_Nombre_key";
       public            postgres    false    220            9           2606    16609    jugador jugador_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.jugador
    ADD CONSTRAINT jugador_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.jugador DROP CONSTRAINT jugador_pkey;
       public            postgres    false    220            �   
   x���          �   
   x���          �   K   x���v
Q���W((M��L�K/*-ȏ�*MOL�/R�P�Lq�(�( �^a%M�0G�P�`CCMk... �~�      �   \   x���v
Q���W((M��L�K/*-ȏ���*MOL�/R�P�Lq�ExAD�t`B@ff�!�0� �DS!��'�5XA(A�i��� wj �      �     x�ՒMN�0��9��MZ)�R`ǆR5�U�wm�r<�o�g�bdB�
!Ė.,�y�c�yQn�E�Ěp� �����@�,��a�j������m-��X5�ZPH�������`��@��Ƃ�pf\m}h�c��W�ϛ�͖)[fY���Ҙ����;C�-$�d)mY�N��u�{tR3>���6����j"]����Nx��w�u�휿8�뉴D	ã=��sR��(o&�ܢ�������U�I���F�'���     
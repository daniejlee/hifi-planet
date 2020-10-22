--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

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

ALTER TABLE IF EXISTS ONLY public.products DROP CONSTRAINT IF EXISTS products_pkey;
ALTER TABLE IF EXISTS ONLY public.orders DROP CONSTRAINT IF EXISTS orders_pkey;
ALTER TABLE IF EXISTS ONLY public.carts DROP CONSTRAINT IF EXISTS carts_pkey;
ALTER TABLE IF EXISTS ONLY public."cartItems" DROP CONSTRAINT IF EXISTS "cartItems_pkey";
ALTER TABLE IF EXISTS public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE IF EXISTS public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE IF EXISTS public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE IF EXISTS public."products_productId_seq";
DROP TABLE IF EXISTS public.products;
DROP SEQUENCE IF EXISTS public."orders_orderId_seq";
DROP TABLE IF EXISTS public.orders;
DROP SEQUENCE IF EXISTS public."carts_cartId_seq";
DROP TABLE IF EXISTS public.carts;
DROP SEQUENCE IF EXISTS public."cartItems_cartItemId_seq";
DROP TABLE IF EXISTS public."cartItems";
DROP EXTENSION IF EXISTS plpgsql;
DROP SCHEMA IF EXISTS public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
1	1	1	2999
2	1	1	2999
3	16	1	2999
4	17	1	2999
5	18	2	2595
6	19	2	2595
7	20	2	2595
8	21	2	2595
9	22	2	2595
10	23	2	2595
11	24	2	2595
12	25	4	999
13	26	3	2900
14	27	1	2999
15	28	1	2999
16	28	1	2999
17	28	1	2999
18	28	1	2999
19	28	2	2595
20	28	2	2595
21	28	1	2999
22	28	1	2999
23	29	3	2900
24	29	2	2595
25	29	2	2595
26	29	5	9900
27	29	6	830
28	29	6	830
29	29	4	999
30	30	3	2900
31	30	2	2595
32	31	4	999
33	32	4	999
34	32	4	999
35	33	4	999
36	34	4	999
37	35	4	999
38	36	4	999
39	30	2	2595
40	30	3	2900
41	30	1	2999
42	37	3	2900
43	37	3	2900
44	37	6	830
45	38	3	2900
46	38	6	830
47	39	2	2595
48	39	6	830
49	39	3	2900
50	39	2	2595
51	39	2	2595
52	40	3	2900
53	40	2	2595
54	40	3	2900
55	40	2	2595
56	41	2	19999
57	41	5	59999
58	41	6	249999
59	41	2	19999
60	41	2	19999
61	41	3	49999
62	42	2	19999
63	42	1	49999
64	42	1	49999
65	43	3	49999
66	43	3	49999
67	43	3	49999
68	43	3	49999
69	43	2	19999
70	44	3	49999
71	43	2	19999
72	45	3	49999
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-09-29 11:44:08.143812-07
2	2020-09-29 11:50:47.120375-07
3	2020-09-29 11:51:21.404315-07
4	2020-09-29 11:53:53.76466-07
5	2020-09-29 11:56:01.403761-07
6	2020-09-29 12:06:44.934447-07
7	2020-09-29 12:10:21.495714-07
8	2020-09-29 12:10:38.869473-07
9	2020-09-29 12:11:07.096542-07
10	2020-09-29 12:13:27.129486-07
11	2020-09-29 12:42:52.356964-07
12	2020-09-29 12:48:04.150314-07
13	2020-09-29 12:49:32.180457-07
14	2020-09-29 12:51:29.943282-07
15	2020-09-29 12:52:09.962431-07
16	2020-09-29 12:52:41.827859-07
17	2020-09-29 12:52:59.194614-07
18	2020-09-29 13:06:32.658035-07
19	2020-09-29 13:07:18.798739-07
20	2020-09-29 13:08:43.512709-07
21	2020-09-29 13:08:58.128342-07
22	2020-09-29 13:09:28.48667-07
23	2020-09-29 13:09:56.742273-07
24	2020-09-29 13:10:22.585725-07
25	2020-09-29 13:20:17.356888-07
26	2020-09-29 13:20:40.667159-07
27	2020-09-29 13:24:50.965412-07
28	2020-09-29 13:26:51.711794-07
29	2020-09-29 22:34:49.132022-07
30	2020-09-30 12:48:47.804499-07
31	2020-09-30 16:20:27.685162-07
32	2020-09-30 16:26:13.826612-07
33	2020-09-30 16:26:48.400266-07
34	2020-09-30 16:29:12.099937-07
35	2020-09-30 16:31:38.381304-07
36	2020-09-30 16:37:33.705462-07
37	2020-09-30 19:21:41.567267-07
38	2020-09-30 19:23:04.399209-07
39	2020-09-30 19:24:19.878602-07
40	2020-10-04 17:29:00.271917-07
41	2020-10-16 03:00:59.161275-07
42	2020-10-16 12:22:42.409959-07
43	2020-10-21 18:26:45.871604-07
44	2020-10-22 03:27:48.517654-07
45	2020-10-22 15:03:21.972485-07
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	31	daniel	000000000	123 hello	2020-09-30 16:20:36.798573-07
2	31	daniel	000000000	123 hello	2020-09-30 16:24:47.790787-07
3	32	daniel	000000000	123 hello	2020-09-30 16:26:30.34666-07
4	33	daniel	000000000	123 hello	2020-09-30 16:26:50.700247-07
5	34	daniel	000000000	123 hello	2020-09-30 16:29:13.78389-07
6	35	daniel	000000000	123 hello	2020-09-30 16:31:40.789947-07
7	30	Daniel Lee	qwe	124	2020-09-30 19:18:07.008573-07
8	37	Daniel	1234	Hello	2020-09-30 19:22:31.408715-07
9	38	Yo	000	Hi	2020-09-30 19:23:17.02718-07
10	39	1	2	3	2020-09-30 19:40:42.167465-07
11	43	1	2	3	2020-10-22 03:40:36.982527-07
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Sennheiser HD660S	49999	/images/hd660s.jpg	Sennheiser’s new HD 660S is the ideal open, dynamic headphone for the passionate audiophile.	The new HD 660 S lets you enjoy sophisticated audiophile sound in even more listening situations.\nThe successor of the legendary HD 650 excels with the improved performance of its new transducer design. Thanks to its lower impedance, it delivers reference-class sound also when connected to hi-res mobile players, thus offering much greater versatility. The HD 660 S is an elegantly designed piece of high-quality engineering that indulges the demanding listener with aural precision and great wearing comfort.
2	Sennheiser HD560S	19999	/images/hd560s.jpg	With linear acoustics, and smooth gratifying bass performance, the HD 560S was crafted for the analytical audio enthusiast.	The HD 560S transducers are specifically tuned for accuracy, offering dependable A/B comparisons of components, mixes, and media formats. The entire frequency range is honest, complemented by smooth, deep bass extension that reveals what nearfield loudspeakers often struggle to reproduce—especially between 20 and 50 Hz. The 120 ohm transducer is all-new, featuring a specialized polymer blend in its membrane for linear excursion and improved brilliance above 10 Hz. The drive magnet offers highly efficient power while its sophisticated damping system manages ventilation—this combination yields deeper bass while mitigating the distortion that otherwise impacts clarity—a difference only the most discerning listeners can appreciate. Whether grading a new hi-resolution master or revisiting a vintage audiophile preamp the HD 560S offers a fatigue-free listen that you can depend on.
3	HiFiMAN Sundara	49999	/images/sundara.jpg	The Sanskrit word “Sundara” literally means “Beautiful” and these headphones fits this description in every way.	Ultra-fine Diaphragm All New Planar Headphone Inherited from Hi-Fi man’s Advanced Technology Featuring Newly Developed Diaphragm that is 80% Thinner than the HE400 Series Resulting in a Wider Frequency Response, Faster and More Detailed Hybrid Headband Design With the weight spreading strap for outstanding comfort but with a more fashion conscious look with its sleek and sumptuous matte black finish. Form Follows Function With its all metal headband the SUNDARA is built to take the rigors of urban street life. The SUNDARA is as tough as it is beautiful. New 3. 5mm Headphone connector for enhanced durability Pocket Powered Performance The slim line Supermini is the perfect on the partner for the SUNDARA. The Supermini with its abundance of audio power output and the SUNDARA’s grace and poise makes them the velvet glove over a marble fist.
4	Philips SHP9500	7499	/images/shp9500.jpg	Open-back design with spacious sound. Ideal for listening to your favorite music everyday at home.	Enjoy an authentic audio experience in comfort! The Philips Performance SHP9500 headphones feature high-precision, acoustically-angled 50mm speaker drivers and exclusive open-back architecture, delivering clear and pristine HiFi sound for the ultimate listening experience. Deluxe breathable ear-pads and cushioned headband let you wear and listen all day long with little fatigue.
6	ZMFheadphones Verite	249999	/images/verite.jpg	Enjoy your own personal audio Vérité. 	Vérité is a term often used in film and television as a style that emphasizes reality, naturalism, and a sense of truth. With the Vérité, ZMF has created a headphone that brings the ultimate truth to audio.  With the utmost speed, accuracy, and heightened dynamic range, the Vérité will immerse the listener in a truly revealing audio eden. With an all new Beryllium coated PEN driver unique to ZMF, a featherweight magnesium chassis, and our most complex acoustic design yet, the Vérité gives you everything you’ve ever wanted from an open, full sized headphone.
5	Beyerdynamic DT 1990 Pro	59999	/images/dt1990pro.jpg	Uncompromising benchmark-setting studio headphones for listening, mixing and mastering.	The DT 1990 Pro reference headphones combine these decades of expertise in headphone technology with the latest Tesla driver technology in an open-back design. Thanks to its high-resolution and well-balanced sound The DT 1990 Pro sets new standards, Not least in terms of design and workmanship. As with all Beyer dynamic professional studio Headphones, The DT 1990 Pro is also handcrafted in Germany. Backed by high-quality materials and meticulous workmanship, This high-end product is a long-term investment. Together with an ingenious open-back design, The high-resolution Tesla drivers ensure a wide, dynamic and extremely natural stereo image. Titanium-coated acoustic fabric and carefully selected precision-woven textiles round off the balanced sound quality. Natural and exceptionally Spatial Sound is achieved thanks to the open-back design. The optimized Spatial Sound reproduction makes the DT 1990 Pro headphones a reliable reference for mixing and mastering applications as well as for critical listening. Choose between a well-balanced sound or Analytical sound thanks to replaceable velour ear pads. Both ear pad variants are included to finish off this impeccable studio headphone package.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 72, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 45, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 11, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--


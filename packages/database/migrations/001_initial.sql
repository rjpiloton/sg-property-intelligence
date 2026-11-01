begin;
create extension if not exists postgis;
create table public.sources (
 id text primary key, name text not null, official_url text not null,
 licence_status text not null check (licence_status in ('pending','approved','restricted')),
 coverage text not null, refresh_notes text not null
);
create table public.projects (
 id text primary key, name text not null, aliases text[] not null default '{}',
 district smallint not null check (district between 1 and 28),
 location geography(point,4326), tenure text, lease_start date, completion_date date,
 expected_top date, source_id text not null references public.sources(id),
 synthetic boolean not null default false
);
create table public.transactions (
 id text primary key, project_id text not null references public.projects(id),
 transaction_date date not null, price_sgd numeric(16,2) not null check(price_sgd>0),
 area_sqm numeric(12,4) not null check(area_sqm>0), floor_range text,
 sale_type text not null check(sale_type in ('new-sale','subsale','resale')),
 source_id text not null references public.sources(id), source_record_id text not null,
 retrieved_at timestamptz not null, synthetic boolean not null default false,
 quality_flags text[] not null default '{}', unique(source_id,source_record_id)
);
create table public.ingestion_runs (
 id bigint generated always as identity primary key, source_id text not null references public.sources(id),
 started_at timestamptz not null, finished_at timestamptz, accepted integer not null default 0,
 rejected integer not null default 0, completeness_notes text not null, status text not null
);
alter table public.sources enable row level security;
alter table public.projects enable row level security;
alter table public.transactions enable row level security;
alter table public.ingestion_runs enable row level security;
-- No public policies: deny access to anon/authenticated until reviewed server routes exist.
commit;

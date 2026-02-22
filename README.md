<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# vault-link

Simple NestJS service for link shortening/redirecting (starter).

## Quick Start

- **Install dependencies**

```bash
pnpm install
```

- **Prepare environment** (copy example and edit as needed)

```bash
cp envs/.env.local .env
# Edit .env to set DB_PASS or other values
```

- **Run database and admin UI with Docker Compose**

```bash
docker-compose up -d
# Adminer will be available at http://localhost:8080
```

- **Run the app (development)**

```bash
pnpm run start:dev
```

The app defaults to the port in `envs/.env.example` (`PORT=3000`).

## Prerequisites

- Node.js (recommend >= 18)
- pnpm (or use `npm`/`yarn` if you prefer; scripts shown use `pnpm`)
- Docker & Docker Compose (optional, for running the database locally)

## Environment

This repository includes a few example env files under the `envs/` folder. Copy or adapt one to the project root as `.env` before running the app. Example variables you may need to set:

- `PORT` — application port (default 3000)
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS` — PostgreSQL connection
- `TYPEORM_SYNC` — TypeORM sync option (useful for development)

Files provided:

- `envs/.env.example` — minimal example
- `envs/.env.local` — local development example (contains `DB_PASS` placeholder)
- `envs/.env.production` — production example

Tip: Docker Compose in this repo reads environment variables from the shell or a `.env` file in the project root. Copy `envs/.env.local` to `.env` and edit credentials before running `docker-compose up`.

## Scripts

Available npm scripts (from `package.json`):

- `pnpm run start` — start the app (default)
- `pnpm run start:dev` — start in watch/dev mode
- `pnpm run start:prod` — start built app from `dist/`
- `pnpm run build` — compile TypeScript
- `pnpm run lint` — run ESLint and fix issues
- `pnpm run format` — run Prettier
- `pnpm run test` — unit tests
- `pnpm run test:e2e` — e2e tests

## Database

The included `docker-compose.yml` runs a Postgres service (`vault-db`) and Adminer for DB management. Default connection values in `envs/.env.local` are:

- `DB_HOST=db`
- `DB_NAME=vault_link_db`
- `DB_PORT=5432`
- `DB_USER=vault_admin`

Set `DB_PASS` in your `.env` before starting containers.

## Testing & Linting

Run tests:

```bash
pnpm run test
pnpm run test:e2e
```

Lint and format:

```bash
pnpm run lint
pnpm run format
```

## Building & Production

Build the project and run the compiled output:

```bash
pnpm run build
pnpm run start:prod
```

## Next steps

- Review `src/config` and `src/db` to confirm TypeORM settings and migrations (if you add them).
- If you want CI/CD, add a workflow to build, test, and deploy the `dist/` artifact.

If you'd like, I can also:

- Add a small `Makefile` or npm script to copy envs automatically.
- Add a short section explaining the HTTP endpoints and Swagger docs location (if enabled).

---

For implementation details, see the `src/` folder (controllers, services, and modules).


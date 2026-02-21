# Stage 1: development and build
# Using Node 22 (LTS) - more stable than 24 for now!
FROM node:22-alpine AS builder

# Set up envs
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"

WORKDIR /app

# Install git
RUN apk add --no-cache git

# 1. Enable Corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# 2. Copy configuration files
COPY package*.json pnpm-lock.yaml* ./

# 3. Install dependencies
# --frozen-lockfile ensures the build is reproducible
RUN pnpm install --frozen-lockfile
RUN pnpm add -g @nestjs/cli

# 4. Copy rest of the application
COPY . .

RUN pnpm run build
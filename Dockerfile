# Stage 1: development and build
# Using Node 22 (LTS) - more stable than 24 for now!
FROM node:22-alpine AS builder

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

# 4. Copy rest of the application
COPY . .

RUN pnpm run build
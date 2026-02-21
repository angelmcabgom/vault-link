# NODE 22 is the LTS version, so its more stable
FROM node:22-alpine AS builder

# Install git
RUN apk add --no-cache git

# 1. Enable Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create the directory and set ownership to the 'node' user
RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

# Switch to the non-root user
USER node

# 2. Copy files (ensuring they are owned by node)
COPY --chown=node:node package*.json pnpm-lock.yaml* ./

# 3. Install dependencies
RUN pnpm install --frozen-lockfile

# 4. Copy rest of the application
COPY --chown=node:node . .

RUN pnpm run build
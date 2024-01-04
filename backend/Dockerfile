FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json ./
RUN bun install
COPY . .

ENV NODE_ENV production

USER bun
EXPOSE 3001/tcp
CMD ["bun", "run", "src/index.ts"]
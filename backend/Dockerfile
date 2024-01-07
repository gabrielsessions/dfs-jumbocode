FROM oven/bun

WORKDIR /usr/src/app

COPY package*.json ./
RUN bun install
COPY . .

ENV NODE_ENV production
ENV PORT 8080

USER bun
EXPOSE 8080/tcp
CMD ["bun", "run", "src/index.ts"]
FROM node:12 AS base

WORKDIR /opt/testapp
COPY . ./

FROM base AS build
RUN npm config set color false
WORKDIR /opt/testapp/frontend
RUN npm ci
RUN npm run build

WORKDIR /opt/testapp/backend
RUN npm ci
RUN npm run build

FROM base AS release
WORKDIR /opt/testapp/backend
ENV NODE_ENV=production
RUN npm ci
COPY --from=build /opt/testapp/backend/lib ./lib
COPY --from=build /opt/testapp/frontend/.next ./.next
EXPOSE 4000
CMD node lib/backend/src/index.js

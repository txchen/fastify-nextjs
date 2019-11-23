# Dev time

```bash
npm i
npm run bootstrap

# this will run both frontend and backend
npm run dev
```

# Ship time

```bash
# build image
docker build . -t mytestapp

# run image
docker run -it --rm -p 4000:4000 mytestapp
```
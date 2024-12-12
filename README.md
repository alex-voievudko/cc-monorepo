Card Corp Monorepo

docker build -t admin-app -f apps/admin/Dockerfile .
docker run -p 3001:3001 admin-app

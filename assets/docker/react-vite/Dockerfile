FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#mặc định docker sẽ chạy trong  mạng nội bộ docker 172.18.0.2 nên cần chạy chế độ host ở project
#option chạy chết độ host
#option run docker network chế độ network_mode: "host"
#option  dung ip tĩnh cho docker 
#docker network create --subnet=172.20.0.0/16 my_custom_network
# Vẫn phải có -p để "bind" ra ngoài
# docker run --net my_custom_network --ip 172.20.0.10 -p 3000:3000 -d my_image
EXPOSE 5173

CMD ["npm", "run", "dev"]
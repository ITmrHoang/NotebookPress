# Các flag của build
--------------------
| Flag                    | Tác dụng                                                                                                                                                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `-f`, `--file`          | Chỉ định tên file Dockerfile (mặc định là `Dockerfile`).                                                                                                                                                                  |
| `-t`, `--tag`           | Gán tên và tag cho image, ví dụ: `myapp:latest`. Có thể dùng nhiều lần.                                                                                                                                                   |
| `--no-cache`            | Không dùng cache, build lại toàn bộ từ đầu.                                                                                                                                                                               |
| `--pull`                | Luôn kéo (pull) image base mới nhất từ registry (Docker Hub...).                                                                                                                                                          |
| `--build-arg <key=val>` | Truyền biến `ARG` vào Dockerfile (dùng trong `ARG ...`).                                                                                                                                                                  |
| `--target <stage>`      | Dùng khi Dockerfile có **multi-stage build**, để chỉ build tới 1 giai đoạn cụ thể.                                                                                                                                        |
| `--platform <platform>` | Build image cho hệ điều hành cụ thể, ví dụ `linux/amd64`, `linux/arm64`.                                                                                                                                                  |
| `--progress=plain `     |`auto`  `tty` : Ghi log kiểu đơn giản, từng dòng văn bản – phù hợp khi debug hoặc CI/CD.  `plain`: Ép luôn dùng giao diện dòng lệnh tương tác (có hiệu ứng động), dù không phải TTY. debug từng dòng không có terminal đẹp |
| `--quiet`, `-q`         | Giảm tối đa output, chỉ in ra image ID sau khi build thành công.                                                                                                                                                          |
<br />

### NOTE: 

Nếu bạn đang:
    Viết nhiều Dockerfile cho dev/prod → dùng -f
    Có ARG (API_URL, ENV, v.v.) → dùng --build-arg
    Build trên CI/CD → nên dùng --no-cache và --pull
<br />

### "Stage" là từng bước riêng biệt trong quá trình build image.

. Giai đoạn 1: Build mã nguồn → tạo ra sản phẩm.
. Giai đoạn 2: Chỉ copy sản phẩm cần thiết vào image cuối → loại bỏ file rác, tool build.

# 👉 Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build
# 👉 Stage 2: Runtime
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
RUN npm install --only=production
CMD ["node", "dist/index.js"]
<br />


| Giai đoạn | Vai trò                                              |
| --------- | ---------------------------------------------------- |
| `builder` | Chứa toàn bộ mã nguồn + công cụ để build (npm, v.v.) |
| Runtime   | Image nhẹ, chỉ chứa kết quả build (thư mục `dist`)   |

--from=builder: copy file từ stage tên builder.

tác dụng: Image nhỏ hơn ,Bảo mật hơn,Tái sử dụng nhiều bước, Build/test rồi mới deploy
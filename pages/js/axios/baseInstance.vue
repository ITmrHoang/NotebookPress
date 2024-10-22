<template>
  <div>
    <h1>Quản lý request fail trong Queue</h1>
    <p>cơ bản vì chung instance sẽ gây ra đệ quy nên 404 cần dùng instance riêng</p>
    <pre>
      <code>
       let isRefreshing = false;
        let failedQueue = [];
        const MAX_REFRESH_ATTEMPTS = 3; // Giới hạn số lần thử

        const processQueue = (error, token = null) => {
          failedQueue.forEach((prom) => {
            if (error) {
              prom.reject(error);
            } else {
              prom.resolve(token);
            }
          });

          failedQueue = [];
        };

        axiosInstance.interceptors.response.use(
          (response) => {
            const { config, status } = response;
            if (status === 401) {
              if (!isRefreshing) {
                isRefreshing = true;
                let refreshAttempts = 0; // Biến đếm số lần thử cho yêu cầu này

                const attemptRefresh = () => {
                  if (refreshAttempts >= MAX_REFRESH_ATTEMPTS) {
                    isRefreshing = false; // Reset trạng thái
                    return Promise.reject(new Error('Maximum refresh attempts reached'));
                  }

                  refreshAttempts++;
                  return refreshToken().then((token) => {
                    config.headers['Authorization'] = `Bearer ${token}`;
                    processQueue(null, token); // Giải quyết hàng đợi với token mới
                    return axiosInstance(config); // Gọi lại request ban đầu
                  }).catch((err) => {
                    return attemptRefresh(); // Thử lại nếu có lỗi
                  });
                };

                return attemptRefresh(); // Bắt đầu quá trình làm mới
              }

              // Nếu đã có yêu cầu làm mới token, thêm vào hàng đợi
              return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
              }).then((token) => {
                config.headers['Authorization'] = `Bearer ${token}`; // Sử dụng token mới
                return axiosInstance(config); // Gọi lại request ban đầu
              });
            }
            return response.data;
          },
          (error) => {
            return Promise.reject(error);
          }
        );

        // Hàm refreshToken
        const refreshToken = async () => {
          // Logic để làm mới token
          // Ví dụ: return axiosInstance.post('/refresh-token');
        };

      </code>
    </pre>

    <p>
    <pre>
      Giải thích cách hoạt động 
      1. Khi nhận được mã trạng thái 401:
        Nếu không có yêu cầu làm mới token nào đang diễn ra (isRefreshing là false), bạn sẽ bắt đầu một yêu cầu làm mới token. 
        Nếu đã có yêu cầu làm mới token, bạn sẽ thêm yêu cầu vào hàng đợi failedQueue
      2. THêm vào  hàng đợi
        <code>
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
      </code>
          Khi bạn thêm một yêu cầu vào failedQueue, bạn tạo một Promise mới.
          resolve và reject được lưu trữ trong hàng đợi để có thể được gọi sau này.   
        3. Khi Token Được Làm Mới: Khi token được làm mới thành công, bạn sẽ gọi processQueue(null, token) để giải quyết tất cả các yêu cầu trong hàng đợi:
            <code> processQueue(null, token); </code> 
          Điều này sẽ gọi resolve cho tất cả các Promise trong failedQueue, truyền token mới vào
        4. Sử Dụng Token Mới: Khi bạn gọi then((token) => {...}), bạn đang xử lý Promise mà bạn đã tạo trước đó
          <code>
          return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            }).then((token) => {
              config.headers['Authorization'] = `Bearer ${token}`;
              return axiosInstance(config);
            });
            </code>
            token ở đây là giá trị mà bạn đã truyền vào khi gọi resolve trong processQueue. cơ chế Closures queue sẽ lưu trữ ref resolve của request  và khi có token sẽ gọi resole trong  đó khi processQueue(null, token);
    </pre>
    <p> Tóm tắt
    <pre>
    failedQueue: Lưu trữ các yêu cầu bị từ chối trong khi token đang được làm mới trong nó như thành một Closures
    then((token) => {...}): Đây là nơi bạn xử lý token mới mà bạn đã giải quyết từ queue khi foreach và gọi resolve của request đó (closures trong queue)
    </pre></p>
    </p>
    <p>update instance</p>
    <pre>
      <code>
        import axios from 'axios';

        // Tạo instance axios chính
        const axiosInstance = axios.create({
          baseURL: 'https://api.example.com',
        });

        // Tạo instance axios riêng cho việc làm mới token
        const refreshTokenInstance = axios.create({
          baseURL: 'https://api.example.com', // Cùng baseURL hoặc khác tùy theo API
        });

        // Interceptor cho axios chính
        axiosInstance.interceptors.response.use(
          (response) => {
            const { config, status } = response;
            if (status === 401) {
              // Xử lý mã 401
              return handle401(config);
            }
            return response.data;
          },
          (error) => {
            return Promise.reject(error);
          }
        );

        // Hàm xử lý mã 401
        const handle401 = async (config) => {
          // Logic để làm mới token
          const token = await refreshToken();
          config.headers['Authorization'] = `Bearer ${token}`;
          return axiosInstance(config); // Gọi lại request ban đầu
        };

        // Hàm refreshToken
        const refreshToken = async () => {
          try {
            const response = await refreshTokenInstance.post('/refresh-token');
            return response.data.token; // Giả sử token được trả về trong response
          } catch (error) {
            return Promise.reject(error);
          }
        };
      </code>
    </pre>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

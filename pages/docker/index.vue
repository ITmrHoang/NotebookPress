<template>
  <Segment title="Sử dụng docker cơ bản">
    <div>
      REF: <a href="https://docs.docker.com/engine/"> chi tiết</a>
      <Fragment title="Các thành phần trong docker">
        <section>
          <h3> <b>Kiến trúc của docker(Docker Architecture)</b></h3>
          <img width="720px" style="aspect-ratio: auto 3/4;"
            src="~\assets\images\docker\docker-architecture.webp"></img>
          <h3>🧱 1. Docker Engine: Đây là trái tim của Docker - một daemon chạy nền, giúp xây dựng và chạy container.
          </h3>
          <div>
            Gồm các thành phần
            <ul>
              <li>dockerd: Docker Daemon – nhận lệnh từ client, quản lý container, image, v.v.</li>
              <li>docker CLI: Công cụ dòng lệnh để gửi lệnh đến dockerd (qua socket hoặc REST API).</li>
              <li>REST API: API cho phép client hoặc tool khác giao tiếp với dockerd <a
                  href="https://docs.docker.com/reference/api/engine/" title="docker engine api">chi tiết</a></li>
            </ul>
          </div>
          <h3>📦 2. Docker Image</h3>
          <ul>
            <li>
              Là khuôn mẫu (template) bất biến để tạo container.
            </li>
            <li>
              Có thể coi như "snapshot" của hệ thống (Linux distro + code + config).
            </li>
            <li>
              Được xây từ Dockerfile hoặc tải từ Docker Hub.
            </li>
          </ul>
          <h3> 🚢 3. Docker Container </h3>
          <ul> 
            <li>Là bản chạy (runtime instance) của một image</li>
            <li>Cô lập hoàn toàn, nhưng nhẹ hơn VM (virtual machine).</li>
          </ul>
          <i class="tip">*tip: có thể dùng volume để chia sẽ dữ liệu chung các container cũng như host. add, copy để chuyển code dữ liệu vào trong container</i>
       
        <h3>📄 4. Dockerfile: Là tập lệnh mô tả cách tạo ra image.</h3>
        <h3>📂 5. Docker Stogre: Dùng để lưu trữ dữ liệu bền vững ngoài container (container chết → data vẫn còn).</h3>
        <img width="720px" style="aspect-ratio: auto 3/4;"  src="~\assets\images\docker\docker-storage.png">
        <h4>Bind mounts: `-m | -mount` Mount-point có thể nằm ở bất kỳ đâu Docker Host không được quản lý bởi Docker cần phải mount vào thư mục tồn tại trên host. thường dùng cho swarm services( gom docker host với nhau thành một cụm [cluster])<a href="https://viblo.asia/p/tim-hieu-docker-swarm-OeVKBnGQKkW"> chi tiết</a></h4>
        <h4>Volume: `-v | -volume` Mount-point sẽ nằm ở /var/lib/docker/volumes/ của Docker Host và được quản lý bằng Docker. thường dùng cho standalone container giống như bind mount nhưng được quản lý ở docker lưu trữ tại nơi nào đó trong host tự sinh</h4>
        <p> Thường dùng cho</p>
        <ul>
          <li>Database</li>
          <li>logs </li>
          <li>uploads</li>
        </ul>
        <h4>tmpfs: `-mount type=tmpfs,dst=< mount-path > | --tmpfs< mount-path >` khi dùng docker trong linux tmpfs mounts data sẽ được lưu tạm vào memory của Docker Host và sẽ mất đi khi khởi động lại hoặc stop container. dùng khi  muốn bảo mật nâng cao hiệu suất khi ghi một dữ liệu lớn không liên tục không giữ lại trên host hoặc container</h4>
        <h3>🔗6. Docker Network: Cho phép các container giao tiếp với nhau hoặc với bên ngoài. Docker tạo sẵn vài loại mạng: bridge, host, none, overlay. </h3>
        <h3>⚙ 7. Docker Compose: Là công cụ để định nghĩa và chạy nhiều container cùng lúc với file docker-compose.yml quản lý các docker cần thiết và cấu hình một cách nhanh chóng dễ dàng</h3>
        <h3>☁️ 8. Docker Hub (hoặc registry khác): Là kho lưu trữ image, cho phép: Kéo (pull) image: docker pull node. Đẩy (push) image bạn tự build lên server</h3>
        <h3>9. Prune unused Docker objects
 </h3>
 <ul>
  <li>
    image: docker image prune < --filter "string \">(This will remove all dangling images , -a: To remove all images which aren't used by existing containers) 

  </li>
  <li>
    container: docker container prune  < --filter "string \"> (This will remove all stopped containers.)
  </li>
  <li>
    volume: docker volume prune < --filter "string \"> (This will remove all volumes not used by at least one container)
  </li>
  <li>
    network: docker network prune < --filter "string \">  (This will remove all networks not used by at least one container)
  </li>
  <li>
    everything: docker system prune --volumes
  </li>
 </ul>
      </section>
      </Fragment>
      <div>Tổng hợp về docker</div>
      <img src="~\assets\images\docker\docker-summary.png" alt="tổng hợp về docker">
      <img src="~\assets\images\docker\docker-summary-example.png" alt="ví dụ dùng docker">
      <Fragment title="build docker file">
        <div>
          <h3>build docker image syntax</h3>
          <code> docker build [OPTIONS] PATH | URL | - </code>
          <code>docker build -f Dockerfile.dev -t my-image:1.0 . </code>
          <div v-html="content.build"></div>
        </div>
      </Fragment>
    </div>
  </Segment>
</template>

<script lang="ts" setup>
  import { useNuxtApp } from "#app";
  import buildFlag from "./build.md?raw";
  import { reactive, onMounted } from "vue";
  const content = reactive({build: ""});


  // Chờ tới khi mounted (chạy ở client) mới render markdown
  onMounted(() => {
    const { $renderMarkdown } = useNuxtApp();
    content.build = $renderMarkdown(buildFlag);
  });
</script>

<style></style>

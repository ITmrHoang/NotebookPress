<template>
  <div>file</div>
  <section>
    <span>run bind folder data</span>
    <article>
      <code>
        docker run -d -p 27017:27017 -v /path/to/your/data:/data/db --name mongodb_container mongo
      </code>
      <span>url : mongodb://localhost:27017</span>
    </article>
  </section>
  <div> <button @click="loadfileDocker"> file</button></div>
</template>

<script>

  export default {
    data() {
      return {
        fileContent: null,
      };
    },
    methods: {
      loadfileDocker() {
        try {
          import("~/assets/docker/mongodb.Dockerfile", {with : {type:'text'}}).then(data => console.log(data)).catch(e => console.log(e));
          // this.fileContent = module.default; // Nội dung tệp được lưu vào biến fileContent
        } catch (error) {
          console.error("Error loading file:", error);
        }
      },
    },
  };
</script>

<style></style>

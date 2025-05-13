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

<!-- <script>

  export default {
    data() {
      return {
        fileContent: null,
      };
    },


    methods: {
      loadfileDocker() {
        try {
          console.log(require.context('~/assets/docker/', true, /\.Dockerfile$/))
          // import("~/assets/docker/mongodb.Dockerfile", {with : {type:'text'}}).then(data => console.log(data)).catch(e => console.log(e));
          // this.fileContent = module.default; // Nội dung tệp được lưu vào biến fileContent
        } catch (error) {
          console.error("Error loading file:", error);
        }
      },
    },
  };
</script> -->
<script setup lang="ts">

// import dockerfileContent from '../../assets/docker/mongodb.Dockerfile?raw';
// console.log(dockerfileContent)

const loadfileDocker = () => {
// try{
          // import("~/assets/docker/mongodb.Dockerfile", {with : {type:'json'}}).then(data => console.log(data)).catch(e => console.log(e));
          // this.fileContent = module.default; // Nội dung tệp được lưu vào biến fileContent
        // } catch (error) {
        //   console.error("Error loading file:", error);
        // }
  const dockerFiles : any= import.meta.glob('~/assets/docker/mongodb.Dockerfile',
  { query: '?raw',
  import: 'default',
// as: 'url'
  },
  
);
  console.log(dockerFiles)

  console.log(`Line 52 - file mongodb :`, dockerFiles['/assets/docker/mongodb.Dockerfile']);
  dockerFiles['/assets/docker/mongodb.Dockerfile']().then((text:any) => console.log(text)) 

// for (const path in dockerFiles) {
//   console.log(dockerFiles[path])
//     dockerFiles[path]().then((url:any) => {
//     console.log(url)
// //         fetch(url)
// //       .then(response => response.text())
// //       .then(content => {
// //         console.log(`Content of ${path}:`, content);
// //         // Bạn có thể xử lý nội dung của file ở đây
// //       });
//   })
// }

  // return import.meta.glob('~/assets/docker/*.Dockerfile')
}
</script>
<style></style>

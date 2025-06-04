<template>
  <section>
    <h3>content file:</h3>
    <pre>{{dockerfileContent}}</pre>
    <DownloadFileLocal icon="my-icon:file-type-docker2" test="13213" label="download"></DownloadFileLocal>
    <span>run bind folder data</span>
    <article>
      <code>
        docker run -d -p 27017:27017 -v /path/to/your/data:/data/db --name mongodb_container mongo
      </code>
      <span>url : mongodb://localhost:27017</span>
    </article>
  </section>

  <!-- <div> <button @click="loadfileDocker"> file</button></div> -->
</template>

<script setup lang="ts">

import dockerfileContent from '../../assets/docker/mongodb.Dockerfile?raw';
import url from '../../assets/docker/mongodb.Dockerfile?url';


const loadfileDocker = () => {


  const dockerFiles : any= import.meta.glob('~/assets/docker/mongodb.Dockerfile',
  { query: '?raw',
  import: 'default',
  eager: true,
// as: 'url'
  },
  
);
  console.log(dockerFiles)

  console.log(`Line 52 - file mongodb :`, dockerFiles['/assets/docker/mongodb.Dockerfile']);
  dockerFiles['/assets/docker/mongodb.Dockerfile']().then((text:any) => console.log(text)) 

}
</script>
<style></style>

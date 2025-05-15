<template>
  <div>
    <h1>Tổng hợp một số tip khi dùng js và nodejs simplize</h1>
    <Segment
      title="import, import(),import.meta.glob() dynamic import lấy file  trong node js, lấy content file dạng text, url, other đẻ dử dụng">

      <div>
        <Fragment title="import">
          <h3> có thể dung import với string or file json để tạo thành 1 object (module) để sử dụng </h3>
          ví dụ
          <pre>
// Data URLs
import x from "data:text/javascript,export default 42;";
// Data URLs for JSON modules
<br/>
import x from 'data:application/json,{"foo":42}' with { type: "json" };
<br/> 
import x from 'path/to/file.json' with { type: "json" };
//ngoài ra sử dụng export 
// import bình thường sẽ mặc định lấy defaultExport
import m from '~/assets/js/test.js';
// sẽ import dạng object module lấy ra toàn bọo các export trong file 
import * as m from '~/assets/js/test.js';
// import toàn bộ file  như một thành phần
import "module-name";
          </pre>
          <h2> một số query khác</h2>
          <code>
           <br>
            //raw import file lấy content file không file module, css, image mà dạng string => FROM mongo:latest \n EXPOSE 27017
            <br/>
            import dockerfileContent from '~/assets/docker/mongodb.Dockerfile?raw'
            <br/>
            //url import dưới dạng url để sử dụng để load sau đó: /_nuxt/assets/docker/mongodb.Dockerfile?t=1747195073644
            <br/>
            import dockerfileContent from '~/assets/docker/mongodb.Dockerfile?url'
            <br/> 
            // inline tượng tự import bình thường , nếu file khác sẽ dạng base64 
            // lưu ý trong nuxt sẽ không thể import trực tiếp ra base64 nó sẽ trả ra url file
            <br/>
            import  m from '~/assets/js/test.js?inline';
            <br/>
            // no-inline Đảm bảo tài nguyên được nhập dưới dạng URL không được nhập inline, hữu ích khi bạn muốn sử dụng URL của tài nguyê
            <br/>
            import  m from '~/assets/js/test.js?no-inline';
            <br/>
            // sharedworker: Nhập script dưới dạng shared worker.
            <br/>
            import SharedWorker from './worker.js?sharedworker';
          </code>

        </Fragment>
        <Fragment title="import() để dynamic import file, get content file">
          <div>
            <h1>Explain: import() là một hàm dùng để import một module vào scope để sử dụng</h1>
            <p>import file dynamic như một module có thể dùng trong function, when mount component, setup app ...</p>
            <pre>
import('path/to/formComponent').then(module => {
    // Sử dụng formComponent ở đây
    console.log(module);
});
//ngoài có thể  sử dụng query trong url như imporrt thường hoặc thêm vào params2 (option : type)
// để lấy content file dạng string 
import("~/assets/docker/mongodb.Dockerfile?raw").then(data => console.log(data)).catch(e => console.log(e));

          </pre>
          </div>
        </Fragment>

        <Fragment title="import.meta.glob để import file và dynamic import module trong vite">
          <div>
            import.meta của js trả về metadata về module hiện tại còn import.meta.glob là tính năng trong vite tạo ra map với key là đường dẫn và giá trị là hàm import
            (promise:() => import("/_nuxt/assets/js/test.js?url").then(m => m["default"]) )
            <h3> bạn có thể dynamic import</h3>
            <pre>
const modules = import.meta.glob('./path/to/modules/*.js');
for (const path in modules) {
  modules[path]().then((module) => {
    //sử dụng module
    console.log(module);
  });



  // một sóo option khi import
const file : any= import.meta.glob('~/assets/js/*.js',
  { 
// query: '?raw', // lấy dữ liệu dạng raw - string data
//   query: {"?raw": ''}, // nhúng prams vào url link import tính năng tương tự ?raw nếu dùng ?raw: còn không sẽ raw=data
// import: 'default', // nếu là module reacjs sẽ mặc định sẽ dùng import target vào export nó không
// as: 'url' // import dưới dạng moudle default là string url file
//  eager: true, // false các tệp tin sẽ được nhập động (lazy-loaded). Điều này có nghĩa là các tệp tin sẽ chỉ được nhập khi bạn thực sự gọi đến chúng. Khi bạn sử dụng eager: true, các tệp tin sẽ được nhập ngay lập tức khi mã của bạn được chạy, không cần phải gọi đến chúng trước
  },)
}

//ví dụ:
const module = import.meta.glob('~/assets/js/*.js', { eager: true });
// output {/assets/js/test.js: Module}
// có thể dùng trực tiếp module['/assets/js/test.js']
const module = import.meta.glob('~/assets/js/*.js', { eager: false });
// output {'/assets/js/test.js': ():Promise => import("/_nuxt/assets/js/test.js")}
// cần phải load () để sử dụng module['/assets/js/test.js']().then(module => ....)
            </pre>
          </div>
        </Fragment>
      <Fragment title="Download file">
          <div>
            <h3> download file về với dữ liệu đâu vào là text</h3>
            <pre>
document.getElementById('downloadBtn').addEventListener('click', function() {
  // Create a blob with the file content
  const blob = new Blob(['Hello, world!'], { type: 'text/plain' });
  // Create a link element
  const link = document.createElement('a');
  // Set the download attribute with a filename
  link.download = 'example.txt';
  // Create a URL for the blob and set it as the href attribute
  link.href = window.URL.createObjectURL(blob);
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
});
            </pre>
            <h3> download dạng import url</h3>
            <pre>
document.getElementById('downloadBtn').addEventListener('click', async function() {
  // Dynamically import the URL
  const fileUrl = await import("~/assets/docker/mongodb.Dockerfile?url");
  // Create a link element
  const link = document.createElement('a');
  // Set the download attribute with a filename
  link.download = 'mongodb.Dockerfile';
  // Set the href attribute to the file URL
  link.href = fileUrl.default;
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
  });
            </pre>
          </div>
      </Fragment>
<Test></Test>
      </div>
    </Segment>
  </div>
</template>

<script lang="ts" setup></script>

<style>
</style>

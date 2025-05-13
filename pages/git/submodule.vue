<script setup lang="ts">
import {ref} from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <a href="#create_subodule">Tạo submodule</a>
  </div>
  <h1> Submodule trong git</h1>
  <p>
    Git submodules cho phép bạn giữ một kho lưu trữ Git khác bên trong một kho lưu trữ Git chính. Điều này rất hữu ích
    khi bạn muốn sử dụng một dự án khác như một thư viện hoặc một phần của dự án chính mà vẫn giữ cho nó tách biệt
  </p>

  <Fragment title="Thêm một submodule vào dự án chính" id="create_subodule" v-on:click="show = !show">
    <section>
      <pre>
    cú pháp : <code> {{'git submodule add <repository-url> <path>'}} </code>

    trong đó:
{{`\t<reopsitory-url> : url của repository của submodule \n\t<path>: path folder sẽ chứa submodule tại local`}}

    <b>ví dụ:</b> <code>submodule add https://github.com/example/repo.git submodule-folder</code>
    </pre>
      <Fragment :lv="2">
        <div>
          <strong>advance: add submodule with the specified branch </strong>
          <div>syntax: <code> {{"git submodule add -b <branch-name> <repository-url> <path>"}} </code></div>
          <div>example:
            <code> {{"git submodule add -b develop https://github.com/example/repo.git submodule-folder"}} </code>
          </div>
        </div>

      </Fragment>
    </section>
  </Fragment>

  <Fragment>
    <template v-slot:title>
      <h1>Cập nhập submodule: <code> github submodule -flag </code> </h1>
    </template>
    <div>
      Lần đầu clone khởi tạo submodule và cập nhập toàn bộ các submodule và submodule con:
      <pre><code>git submodule update --init --recursive</code></pre>
      các flag:
      <ul>
        <li>
          --init: Khởi tạo các submodule chưa được khởi tạo. Điều này rất hữu ích khi bạn vừa clone repository và cần
          khởi tạo tất cả các submodule.
        </li>
        <li>
          --recursive: Cập nhật tất cả các submodule và các submodule con của chúng. Điều này đảm bảo rằng tất cả các
          submodule ở mọi cấp độ đều được cập nhật.
        </li>
        <li>
          --remote: Cập nhật submodule để theo dõi các commit mới nhất từ remote repository thay vì commit được chỉ định
          trong repository chính.
          Trong repository chính, mỗi submodule sẽ được liên kết với một commit cụ thể nó sẽ không cập nhập dù remote
          submodule repo có cập nhập mới.
          vậy nên cần dùng --remote đẻ cập nhập commit mới nhất từ remote sub
        </li>
        <li>
          --merge: Kết hợp các thay đổi từ remote repository (submodule) vào submodule trên local. => git sẽ lấy các
          commit
          mới nhất từ remote repository của sub module và repo trên local
        </li>
        <li>
          --checkout: Sử dụng git checkout để cập nhật submodule thay vì git merge.
        </li>
      </ul>
      <strong>
        tại repository chính bạn có thể vào folder sub thực hiện thay đổi và sommit push lên remote của nó như
        project
        bình thường
        sau đó ra repo chính add => commit => push lên để cập nhập commit mới nhất lên repo chính nêú muốn
        <br/>
        để quay lại commit cũ của sub cũng có thể cd vào checkout trở lại và về repo chính push lên
      </strong>
    </div>
  </Fragment>

  <Fragment title="Cấu hình submodule bằng file file: '.gitmodules' ">
    <div>{{'[submodule "path/to/submodule"] \npath = path/to/submodule' 
      + '\nurl = https://github.com/user/repository.git'
    +'\nbranch = < name>'}}
  </div>
  </Fragment>

  <Fragment title="Xóa submodule khỏi repo chính">
    <div>
      <div>
        <code>
        git submodule deinit -f < path_to_submodule>
        </code>
      </div>
      <div>
        <code>
          rm -rf < path_to_submodule>
        </code>
      </div>
    </div>
  </Fragment>

</template>

<style scoped></style>
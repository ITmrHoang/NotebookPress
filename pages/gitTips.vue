<template>
  <div>
    <a href="#alias"> Create alias</a>
    <h1 id="alias">Create alias & some alias utilize</h1>
    <section>
      <h2>1. Create</h2>
      <details>
        <summary>use cmd:</summary>
        <p>
          <code>
            git config --global alias.&lt;alias> &lt;git-command> or git config --global
            alias.&lt;alias_name > '&lt;cmd_has_space>'
          </code>
        </p>
      </details>
      <details>
        <summary>change file</summary>
        <p>
          open file: ~/.gitconfig or cmd: <strong> git config --global --edit</strong>
          <br />
          <code>
            <pre>
              [alias]
                &lt;alias_name> = '&lt;cmd_has_space>' 
                </pre
            >
          </code>
        </p>
      </details>
    </section>
    <section>
      <article>
        <h2>2. Utilize</h2>
        <details>
          <summary>
            create alias add commit and push fast with dateitme and user commit
          </summary>
          <p>
            <code>
              {{
                `
              push-ac = "!f() { git add . && git commit -m \"Commit on $(date'%Y-%m-%d')\" -m \" by $(git config user.name) <$(git config user.email)> && git push $(git branch --show-current); }; f"
              `
              }}
            </code>
          </p>
        </details>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

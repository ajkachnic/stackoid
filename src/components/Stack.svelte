<script>
  import Button from './Button.svelte';

  export let name;
  export let tagline;
  // export let iconLink;
  export let languagesAndFrameworks = {};
  export let technologies = {};
  export let database = {};
	export let other = {};
  export let deployment = {};
  export let link;

  function isEmpty(object) {
    if(JSON.stringify(object) == JSON.stringify({})) return true;
    return false;
  }

  let expanded = false;
</script>
<style>
  .card {
    box-shadow: 0 5px 10px rgba(0, 0, 0, .25);
    padding: 1.5rem;
    background: var(--theme-background);
    height:auto;
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    word-wrap: break-word;
  }
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }
  blockquote {
    margin-left: 1em;
  }

  .parts {
    display: none;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    gap:1rem;
  }
  .expanded {
    display: grid;
  }
  a {
    color: var(--theme-accent);
    text-decoration: none;
  }
  
  @media(min-width: 300px) {
  .parts {
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
  }
</style>
<div class="card" >
  <h2 class="name">
    <a href={link ? link : "#"} target={link? "_blank" : ""} rel="noreferrer">{name}</a>
  </h2>
  <blockquote class="tagline">{tagline}</blockquote>
  <div class="parts" class:expanded="{ expanded == true}">
  {#if !isEmpty(languagesAndFrameworks)}
    <div class="laf">
      <h3>Languages & Frameworks</h3>
      <h4 class="subheader">{languagesAndFrameworks.usage}</h4>
      <ul>
      {#each languagesAndFrameworks.items as item }
        <li>{item}</li>
      {/each}
      </ul>
    </div>
    {/if}
  {#if !isEmpty(technologies)}
    <div class="tech">
      <h3>Technologies</h3>
      <h4 class="subheader">{technologies.usage}</h4>
      <ul>
      {#each technologies.items as item }
        <li>{item}</li>
      {/each}
      </ul>
    </div>
    {/if}
    {#if !isEmpty(database)}
    <div class="database">
      <h3>Database & Storage</h3>
      <h4 class="subheader">{database.usage}</h4>
      <ul>
      {#each database.items as item }
        <li>{item}</li>
      {/each}
      </ul> 
    </div>
    {/if}
    {#if !isEmpty(deployment)}
    <div class="deployment">
      <h3>Deployment</h3>
      <h4 class="subheader">{deployment.usage}</h4>
      <ul>
      {#each deployment.items as item }
        <li>{item}</li>
      {/each}
      </ul>
    </div>
    {/if}
    {#if !isEmpty(other)}
    <div class="other">
      <h3>Other</h3>
      <h4 class="subheader">{other.usage}</h4>
      <ul>
      {#each other.items as item }
        <li>{item}</li>
      {/each}
      </ul>
    </div>
    {/if}
  </div>
  <Button handleClick={() => expanded = !expanded}>{expanded ? "Close..." : "Expand..."}</Button>

</div>
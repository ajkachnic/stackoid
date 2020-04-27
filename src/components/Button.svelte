<script>
  export let type = "button";
  export let handleClick;
</script>
<style>
.btn {
		background: var(--theme-accent);
		color: #101010;
		padding: .75em 1.5em;
		font-size: 1rem;
		border: none;
		font-weight:500;
		font-family: 'AvenirNext', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		margin: .5em 0 0;
  }
</style>
<button class="btn" {type} on:click={handleClick}>
  <slot>

  </slot>
</button>
<script>
import { getContext } from 'svelte';
const theme = getContext("theme");

let toggle = theme.toggle
</script>
<style>
* {
		font-family: 'AvenirNext';
}
	nav {
		font-family: 'AvenirNext';
		font-weight: 500;
		padding: 0 1em;
	}

	ul {
		display: flex;
		justify-content: space-evenly;
		list-style: none;
	}

	a, .a {
		border: none;
		padding: none;
		background: none;
		text-decoration: none;
		cursor: pointer;
		/* padding: 1em 0.5em; */
		font-size: 1.25rem;
		color: var(--theme-foreground);
	}
	h2 {
		/* padding: 1em 0.5em; */
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--theme-accent);
		display: none;
	}
	.logo {
		display: none;
	}
	@media (min-width: 500px) {
		h2,.logo {
			display: block;
		}
		ul {
			display: grid;
			justify-content: center;
			grid-template-columns: 2fr repeat(3, 1fr);
			list-style: none;
		}
	}
</style>

<nav>
	<ul>
		<li class="logo">
			<h2>stackoid</h2>
		</li>
		<li>
			<a href='/'>stacks</a>
		</li>
		<li>
			<a href='/submit'>submit</a>
		</li>
		<li>
			<span class="a" on:click={toggle}>theme</span>
		</li>
	</ul>
</nav>

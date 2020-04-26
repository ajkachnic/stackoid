<script>
	import { onMount } from "svelte";


	import Stack from '../components/Stack.svelte';
	import swal from '../../utils/swal.js';
	let stacks = [];
	let skip = 0;
	let count = 25;

	
	async function loadMore() {
		let res = await fetch(`/api/v1/get-stacks?count=${count}&skip=${skip}`);
		if(res.status == 200) {
			let json = await res.json();
			if(json.content.length > 0) {
				stacks = [...stacks, ...json.content]
				skip += json.content.length;
				swal.success("Loaded stacks!")
			}
			else {
				swal.warning("There are no more available stacks to view")
			}
		}
		else {
			let error = "Unknown error..."
			try {
				let json = await res.json()
				error = json.message;
			}
			finally {
				swal.error(error)
			}
		}

	}
	onMount(async () => {
		let res = await fetch(`/api/v1/get-stacks?count=${count}&skip=${skip}`);
		if(res.status == 200) {
			let json = await res.json();
			stacks = [...stacks, ...json.content]
			skip += count;
		}
		else {
			let error = "Unknown error..."
			try {
				let json = await res.json()
				error = json.message;
			}
			finally {
				swal.error(error)
			}
		}
	})
</script>
<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	footer {
		margin: 3em 0;
	}

	p {
		margin: 1em auto;
	}

	.stacks {
		display: flex;
		gap: 1rem;
		justify-content: center;

		margin: 1.5em 0;
		flex-direction: column;
	}
	.loadMore {
		background: var(--theme-accent);
		color: #101010;
		padding: .75em 1.5em;
		font-size: 1.25rem;
		border: none;
		margin: 1em 0;
		font-weight:500;
		font-family: 'AvenirNext', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		margin: 2em 0;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	/* @media (min-width: 500px) {
		.stacks {
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		grid-template-columns: 1fr;
		justify-content: center;
		align-items: flex-start;
		display: grid;
		}
	} */
</style>

<svelte:head>
	<title>Stackoid</title>
</svelte:head>

<main>
	<h1>stackoid</h1>
	<p>a platform for discovering new technologies and services used by projects</p>

	<section class="stacks">
		{#each stacks as s }
			<Stack 
			name={s.name} 
			tagline={s.tagline} 
			languagesAndFrameworks={s.languagesAndFrameworks}
			database={s.database== {} ? {} : s.database}
			other={s.other == {} ? {} : s.other}
			deployment={s.deployment== {} ? {} : s.deployment}
			technologies={s.technologies== {} ? {} : s.technologies}
			link={s.link}
			/>
		{ /each }
	</section>
	<button on:click={loadMore} class="loadMore">Load More</button>
</main>
<footer>
<p>Made with ❤️ by <a href="https://github.com/ajkachnic">Andrew Kachnic</a></p>
</footer>
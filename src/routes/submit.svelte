<svelte:head>
	<title>Stackoid - Submit</title>
</svelte:head>
<style>
form {
	display: block;
}
label {
	display: block;
}
p {
	margin: .5em;
}
.big {
	font-size: 1.5rem;
	font-weight: 700;
}
.small {
		font-size: 1.25rem;
	font-weight: 600;
}
input {
	margin: .5em 0 1em 0;
	font-size: 1rem !important;
	box-shadow: 0 0 5px rgba(0, 0, 0, .25);
	color: var(--theme-background);
	padding: .25em 0 .5em 0;
}
.description {
	font-style: italic;
	opacity: .75;
	font-weight: 600;
	font-size: .9rem !important;
}
.fields {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

</style>
<script>
import Button from '../components/Button.svelte';

import swal from '../../utils/swal.js'
let name = '';
let tagline = '';
let link = '';

let languagesAndFrameworksUsage = '';
let languagesAndFrameworks = '';

let technologiesUsage = '';
let technologies = '';

let databaseUsage = '';
let database = '';

let deploymentUsage = '';
let deployment = '';


let otherUsage = '';
let other = '';
async function handleSubmit(event) {
	let body = {
		name: name,
		tagline: tagline,
		link: link,
		languagesAndFrameworks: languagesAndFrameworks == '' ? {} : {
			usage: languagesAndFrameworksUsage,
			items: languagesAndFrameworks.split(',')
		},
		technologies: technologies == '' ? {} : {
			usage: technologiesUsage,
			items: technologies.split(',')
		},
		database: database == '' ? {} : {
			usage: databaseUsage,
			items: database.split(',')
		},
		deployment: deployment == '' ? {} :  {
			usage: deploymentUsage,
			items: deployment.split(',')
		},
		other: other == '' ? {} :  {
			usage: otherUsage,
			items: other.split(',')
		},
	}
	let res = await fetch('/api/v1/new-stack', {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	let json = await res.json()
	if(res.ok == true) {
		swal.success(json.message);
		setTimeout(() => {
			location.replace("/")
		}, 3000)
	} else {
		swal.error(json.message);
	}
}
</script>
<main>
<h1>Submit a stack</h1>

<form on:submit|preventDefault="{handleSubmit}">
	<div class="fields">
		<section>
			<label class="big">Project Name: 
				<p class="description">The name of your project</p>
				<input type="text" bind:value={name} required="true">
			</label>
			<label class="big">Project Link: 
				<p class="description">The link to your project (include 'https')</p>
				<input type="text" bind:value={link} required="true">
			</label>
			<label class="big">Tagline: 
				<p class="description">A short description of your project</p>
				<input type="text" bind:value={tagline} required="true">
			</label>
		</section>

		<section>
			<label class="big">Languages & Frameworks*: 
				<label class="small">
					Usage
					<p class="description">Describe how these are used in your project</p>
					<input type="text" bind:value={languagesAndFrameworksUsage}>
				</label>
				<label class="small">
					Items
					<p class="description">Comma seperated values (ex. javascript,react)</p>
					<input type="text" bind:value={languagesAndFrameworks}>
				</label>
			</label>
		</section>

		<section>
			<label class="big">Technologies*: 
				<label class="small">
					Usage
					<p class="description">Describe how these technologies are used in your project</p>
					<input type="text" bind:value={technologiesUsage}>
				</label>
				<label class="small">
					Items
					<p class="description">Comma seperated values (ex. serverless,compression)</p>
					<input type="text" bind:value={technologies}>
				</label>
			</label>
		</section>

		<section>
			<label class="big">Databases & Storage*: 
				<label class="small">
					Usage
					<p class="description">Describe how these are used in your project</p>
					<input type="text" bind:value={databaseUsage}>
				</label>
				<label class="small">
					Items
					<p class="description">Comma seperated values (ex. MongoDB,Redis)</p>
					<input type="text" bind:value={database}>
				</label>
			</label>
		</section>
  	<section>
			<label class="big">Deployment*: 
				<label class="small">
					Usage
					<p class="description">Describe how these are used in your project</p>
					<input type="text" bind:value={deploymentUsage}>
				</label>
				<label class="small">
					Items
					<p class="description">Comma seperated values (ex. AWS,Azure)</p>
					<input type="text" bind:value={deployment}>
				</label>
			</label>
		</section>
		<section>
			<label class="big">Other*: 
				<label class="small">
					Usage
					<p class="description">Describe how these are used in your project</p>
					<input type="text" bind:value={otherUsage}>
				</label>
				<label class="small">
					Items
					<p class="description">Comma seperated values (ex. Cloudinary,etc)</p>
					<input type="text" bind:value={other}>
				</label>
			</label>
		</section>
	</div>
	<Button type="submit">Submit</Button>
	<p class="description">*: Optional</p>
</form>
</main>
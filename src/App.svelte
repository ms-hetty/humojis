<script>
	export let filter = {
		year: 2020,
		region: 'any',
		gender: 'any',
		age: 'any'
	};
	export let display = {
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_women: 0,
		old_men: 0
	};
	export let reference = {
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_women: 0,
		old_men: 0
	};

    import Canvas from './Canvas.svelte';
	import Form from './Form.svelte';
	import Database from './Database.svelte';
</script>

<style>
</style>

<main>
	<Form bind:filter={filter}/>
	<Database bind:filter={filter} bind:display={display} bind:reference={reference} />
	<h1>World in emojis!</h1>
	<Canvas bind:filter={filter} bind:display={display} bind:reference={reference} />
</main>
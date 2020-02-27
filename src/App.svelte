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

    import Header from './Header.svelte';
    import Canvas from './Canvas.svelte';
	import Form from './Form.svelte';
	import Database from './Database.svelte';
</script>

<style>
    /* General and Desktop styles */
	main {
		color: #ffffff;
		font-family: 'Open Sans', Arial, Helvetica, sans-serif;
		padding: 0;
		margin: 0;

		display: grid;
		grid-template-rows: 280px 1fr;
		grid-template-columns: 450px 1fr;
		min-height: 100vh;
	}

	/* Tablet styles */
	@media (max-width: 1025px) {
	}

	/* Mobile styles */
	@media (max-width: 760px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>

<main>
	<Header />
	<Form bind:filter={filter}/>
	<Database bind:filter={filter} bind:display={display} bind:reference={reference} />
	<Canvas bind:filter={filter} bind:display={display} bind:reference={reference} />
</main>
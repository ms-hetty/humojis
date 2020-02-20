<script>

    import { createEventDispatcher } from 'svelte';
    
    export let filter = {
		year: 1950,
		region: 'any',
		gender: 'any',
		age: 'any'
	};
</script>

<style>
</style>

<form>
    <input type="range" id="year" name="year" min={1950} max={2020} bind:value={filter.year}>

    <select name="region" id="region" bind:value={filter.region}>
        <option value="any">World</option>
        <option>Africa</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Latin America and the Caribbean</option>
        <option>Northern America</option>
        <option>Oceania</option>
    </select>

    <select name="gender" id="gender" bind:value={filter.gender}>
        <option value="any">All</option>
        <option value="Female">Only Female</option>
        <option value="Male">Only Male</option>
    </select>

    <select name="age" id="age"  bind:value={filter.age}>
        <option value="any">All</option>
        <option value="Babys">Babys</option>
        <option value="Kids">Children</option>
        <option value="Adults">Adults</option>
        <option value="Seniors">Seniors</option>
    </select>
</form>
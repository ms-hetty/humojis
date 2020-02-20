<script>
    import Emoji from './Emoji.svelte';

    export let filter = {
		year: 1950,
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
		old_woman: 0,
        old_man: 0
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

    let emojis = [];
    let width = 0;
    let height = 0;

    let reference_height = 25;
    let reference_width = 25;

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }


    $: {
        let r = reference;
        let d = display;

        if (document.getElementById('reference_id') != null) {
            reference_height = Math.ceil(document.getElementById('reference_id').offsetHeight)+1;
            reference_width = Math.ceil(document.getElementById('reference_id').offsetWidth)+1;
        }

        let space = (width/reference_width)*(height/reference_height);
        let total = r.baby_girls+r.baby_boys+r.girls+r.boys+r.women+r.men+r.old_women+r.old_men;

        emojis = [];
        if ((total > 0) && (space > 0)) {
            let max = Math.round(d.baby_girls/total*space);
            for (let i=0; i < max; i++) emojis.push('baby_girl');
            max = Math.round(d.baby_boys/total*space);
            for (let i=0; i < max; i++) emojis.push('baby_boys');
            max = Math.round(d.boys/total*space);
            for (let i=0; i < max; i++) emojis.push('girl');
            max = Math.round(d.girls/total*space);
            for (let i=0; i < max; i++) emojis.push('boys');
            max = Math.round(d.women/total*space);
            for (let i=0; i < max; i++) emojis.push('women');
            max = Math.round(d.men/total*space);
            for (let i=0; i < max; i++) emojis.push('men');
            max = Math.round(d.old_women/total*space);
            for (let i=0; i < max; i++) emojis.push('old_women');
            max = Math.round(d.old_men/total*space);
            for (let i=0; i < max; i++) emojis.push('old_men');
            emojis = shuffle(emojis);
        }
    }
</script>

<style>
    p {color: red; }

    .canvas {
        width: 100%;
        height: 500px;
        font-size: 1.5em;
        background: lightgrey;
        overflow: hidden;
    }
    .reference {
        font-size: 1.5em;
        /*display: none; */
    }
</style>

<div class="canvas" bind:clientWidth={width} bind:clientHeight={height}>
    {#each emojis as e, i}
        <Emoji type={e} index={i} />
    {/each}
</div>
<div class="reference">
    <span id="reference_id">🔴</span>
</div>
<div class="numbers">
    <p>year: {filter.year}</p>
    <p>region: {filter.region}</p>
    <p>gender: {filter.gender}</p>
    <p>age: {filter.age}</p>
    <p></p>
    <p>baby_girls: {display.baby_girls}</p>
    <p>baby_boys: {display.baby_boys}</p>
    <p>girls: {display.girls}</p>
    <p>boys: {display.boys}</p>
    <p>women: {display.women}</p>
    <p>men: {display.men}</p>
    <p>old_women: {display.old_women}</p>
    <p>old_men: {display.old_men}</p>
</div>

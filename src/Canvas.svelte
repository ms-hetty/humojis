<script>
    import Emoji from './Emoji.svelte';

    export let filter = { //What are we shoing?
		year: 1950,
		region: 'any',
		gender: 'any',
		age: 'any'
    };
    export let display = { //What are the numbers?
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_woman: 0,
        old_men: 0
    };
	export let reference = { //What is the reference of the number? (the maximum, probably "today")
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_women: 0,
		old_men: 0
	};

    let emojis = []; //The settings for emojis which are printed
    let width = 0; //Width of the total container
    let height = 0; //height of the total container
    let space = 0; //How many emojis can we print into the container
    let total = 0; //How many people is the total of the maximum
    let center = { //Where is the centerpointin the total container
        x: 0,
        y: 0
    };
    let room = { //What is the room of all emojis? (it's a square in the total container)
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    let reference_height = 25; //height of one emoji
    let reference_width = 25; //width of one emoji

    let emoji_scale = 0; //translation of one emoji to people

    let angle = 0; //Angle of the current drawing of an emoji
    let radius = 0; //Radius from the center point of the current drawing of an emoji
    let step = 0; //Current step of the drawing

    function shuffle(a) { //Function to shuffel the array of emojis
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function getEmojiX(i) {
        //Recalculate the globals...
        angle = (Math.PI) * Math.sqrt(step);
        radius = angle/(2*Math.PI)*((reference_height+reference_width)/2);
        if (angle > (2*Math.PI)) angle -= (2*Math.PI);
        step++;

        let x = Math.round(center.x + radius * Math.cos(angle) - reference_width/2);
        return room.x+x;
    }
    function getEmojiY(i) {
        let y = Math.round(center.y + radius * Math.sin(angle) - reference_height/2);
        return room.y+y;
    }


    //main() do everything!
    let working = false;
    $: {
        if (working == false) {
            working = true;
            let r = reference;
            let d = display;

            // Size of one Emoji
            if (document.getElementById('reference_id') != null) {
                reference_height = Math.ceil(document.getElementById('reference_id').offsetHeight)+1;
                reference_width = Math.ceil(document.getElementById('reference_id').offsetWidth)+1;
            }

            //how much space do we have?
            if (width<height) {
                room.width = width;
                room.height = width;
                room.y = (height-width)/2;
                room.x = 0;
            }
            else {
                room.height = height;
                room.width = height;
                room.x = (width-height)/2;
                room.y = 0;
            }
            center.x = room.width/2;
            center.y = room.height/2-5;

            space = (room.width/reference_width)*(room.height/reference_height);
            total = r.baby_girls+r.baby_boys+r.girls+r.boys+r.women+r.men+r.old_women+r.old_men;
            emoji_scale = Math.round(total/space)*1000;

            emojis = [];
            if ((total > 0) && (space > 0)) {
                //reset drawing
                angle = 0;
                radius = 0;
                step = 0;

                //Add emojis for printing
                let max = Math.round(d.baby_girls/total*space);
                for (let i=0; i < max; i++) emojis.push('baby_girls');
                max = Math.round(d.baby_boys/total*space);
                for (let i=0; i < max; i++) emojis.push('baby_boys');
                max = Math.round(d.boys/total*space);
                for (let i=0; i < max; i++) emojis.push('girls');
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

                //Change the order of emojis to random
                emojis = shuffle(emojis);

            }
            working = false;
        }
    }
</script>

<style>
    .canvas {
        overflow: hidden;
        height: 800px;
        font-size: 1.3rem;
        line-height: 1em;
    }
    .canvas-inner {
        width: 100%;
        height: 100%;
        
        background: lightgrey;
        overflow: hidden;
        position: relative;
    }
    .reference {
        font-size: 1.1rem;
    }
</style>

<div class="canvas">
    <div class="canvas-inner" bind:clientWidth={width} bind:clientHeight={height}>
        {#each emojis as e, i (Math.random())}
            <Emoji type={e} index={i} x={getEmojiX(i)} y={getEmojiY(i)} referenceHeight={reference_height} referenceWidth={reference_width} />
        {/each}
    </div>
    <div class="reference">
        <span id="reference_id">🙂</span>
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
</div>
<div class="scale">
    One Emoji is roughly equal to {emoji_scale} wunderful people on Earth
</div>
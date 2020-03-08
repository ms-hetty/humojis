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
    let key = 0; //key-variable for redrawing!

    let ctx = null;

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

    function getEmojiX(step) {
        //Recalculate the globals...
        angle = (Math.PI) * Math.sqrt(step);
        radius = angle/(2*Math.PI)*((reference_height+reference_width)/2);
        if (angle > (2*Math.PI)) angle -= (2*Math.PI);

        let x = Math.round(center.x + radius * Math.cos(angle) - reference_width/2);
        return room.x+x;
    }

    function getEmojiY(step) {
        let y = Math.round(center.y + radius * Math.sin(angle) - reference_height/2);
        return room.y+y;
    }

    //main() do everything!
    let working = false;
    $: {
        if ((working == false) && (document.getElementById('ctx') != null)) {
            working = true;
            let r = reference;
            let d = display;

            //Init Canvas
            if (ctx == null) {
                ctx = document.getElementById('ctx').getContext('2d');
                ctx.scale(2,2);
                document.getElementById('ctx').style.width = "3000px";
                document.getElementById('ctx').style.height = "2000px";
                ctx.font = '24px sans-serif';
            }
            // Size of one Emoji
            let refemoji = ctx.measureText('🙂');

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
            center.y = room.height/2;

            space = ((room.width)/(refemoji.width-6))*((room.height)/(refemoji.width-6));
            total = r.baby_girls+r.baby_boys+r.girls+r.boys+r.women+r.men+r.old_women+r.old_men;
            emoji_scale = Math.round(total/space)*1000;

            let newemojis = [];
            if ((total > 0) && (space > 0)) {
                //reset drawing
                angle = 0;
                radius = 0;

                //Add emojis for printing
                let max = Math.round(d.baby_girls/total*space);
                for (let i=0; i < max; i++) newemojis.push('👶');
                max = Math.round(d.baby_boys/total*space);
                for (let i=0; i < max; i++) newemojis.push('👶');
                max = Math.round(d.boys/total*space);
                for (let i=0; i < max; i++) newemojis.push('👧');
                max = Math.round(d.girls/total*space);
                for (let i=0; i < max; i++) newemojis.push('👦');
                max = Math.round(d.women/total*space);
                for (let i=0; i < max; i++) newemojis.push('👩');
                max = Math.round(d.men/total*space);
                for (let i=0; i < max; i++) newemojis.push('👨');
                max = Math.round(d.old_women/total*space);
                for (let i=0; i < max; i++) newemojis.push('👵');
                max = Math.round(d.old_men/total*space);
                for (let i=0; i < max; i++) newemojis.push('👴');

                //Change the order of emojis to random and push state!
                emojis = shuffle(newemojis);

                //Set size
                ctx.width = width;
                ctx.height = height;

                //Clear everything
                ctx.clearRect(0, 0, width, height);

                //Draw emojis
                for (let i=0; i < emojis.length; i++) {
                    ctx.fillText(emojis[i], getEmojiX(i), getEmojiY(i));
                }

            }
            working = false;
        }
    }
</script>

<style>
    /* General and Desktop styles */
    .canvas {
        background-color: #0052CC;
        position: relative;
        grid-area: 1 / 2 / 3 / 2;
        flex: 1;
        overflow: hidden;
        padding: 0;
    }
    
    .emoji-canvas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 1.3rem;
        line-height: 1em;
        overflow: hidden;
    }
    h2.scale {
        padding: 50px 40px 0 40px;
        font-size: 20px;
        font-weight: 600;
        line-height: 18px;
    }
    .copyright {
        position: absolute;
        bottom: 40px;
        right: 0;
        padding: 0 40px 0 40px;
        font-size: 12px;
    }
    .emoji-canvas-inner {
        overflow: hidden;
        position: absolute;
        top: 100px;
        left: 40px;
        width: calc(100vw - 530px);
        right: 0;
        height: calc(100vh - 100px);
    }
    
    .reference {
        font-size: 24px;
        visibility: hidden;
    }
    .numbers {
        visibility: hidden;
    }
    
    a {
		color: #ffffff;
        text-decoration: none;
	}
    a:hover {
        text-decoration: underline;
    }
    ::-moz-selection {
        color: #0052CC;
    }
    ::selection {
        color: #0052CC;
    }

    /* Mobile styles */
	@media (max-width: 1023px) {
        .canvas {
            overflow: visible;
            min-height: calc(100vw + 100px);
        }
        h2.scale {
            padding: 16px 0 0 0;
        }
        .emoji-canvas {
            padding: 0 12px;
            min-height: calc(100vw + 60px);
        }    
        .emoji-canvas-inner {
            top: 60px;
            left: 12px;
            width: calc(100vw - 24px);
            min-height: 100vw;
            height: auto;
            bottom: 0;
        }
        .copyright {
            bottom: 16px;
            padding-left: 12px;
            padding-right: 12px;
            left: 0;
        }
    }
</style>

<div class="canvas">
    <div class="emoji-canvas">
        <h2 class="scale">
            One Emoji equals {new Intl.NumberFormat().format(emoji_scale)} wonderful people
        </h2>
        <div class="emoji-canvas-inner" bind:clientWidth={width} bind:clientHeight={height}>
            <canvas height="4000" width="6000" id="ctx">
                Fallback
            </canvas>
        </div>
        <div class="copyright">
            By <a href="https://www.stefanie-hetjens.com/" target="_blank" rel="noopener">Stefanie Hetjens</a>, Copyright 2020, licensed as <a href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC-BY-NC</a>
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
</div>
<script>
    export let index = 1;
    export let type = "baby_girls";
    export let x = 0;
    export let y = 0;
    export let referenceHeight = 0;
    export let referenceWidth = 0;
</script>

<style>
    /* General and Desktop styles */
    .emoji {
        position: absolute;
        display: block;
    }
    .face {
        display: inline;
    }

	/* Tablet styles */
	@media (max-width: 1025px) {
	}

	/* Mobile styles */
	@media (max-width: 760px) {
	}
</style>

<div class="emoji" id="emoji-{index}" style="z-index: {Math.round(Math.random()*1000)}; width: {referenceWidth}px; height: {referenceHeight}px; left: {x}px; top: {y}px;">
    <div class="face">
        {#if type == 'baby_boys'} 👶
        {:else if type == 'baby_girls'} 👶
        {:else if type == 'boys'} 👦
        {:else if type == 'girls'} 👧
        {:else if type == 'men'} 👨
        {:else if type == 'women'} 👩
        {:else if type == 'old_men'} 👴
        {:else if type == 'old_women'} 👵
        {:else}{type}
        {/if}
    </div>
</div>
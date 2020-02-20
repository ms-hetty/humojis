<script>
    export let index = 1;
    export let type = "baby_girls"
</script>

<style>
.emoji {
    display: inline;
}
.face {
    display: inline;
}

</style>

<div class="emoji" id="emoji-{index}">
    <div class="face">
        {#if type == 'baby_boys'} 👶
        {:else if type == 'baby_girls'} 👶
        {:else if type == 'boys'} 👦
        {:else if type == 'girls'} 👧
        {:else if type == 'men'} 👨
        {:else if type == 'women'} 👩
        {:else if type == 'old_men'} 👴
        {:else if type == 'old_women'} 👵
        {/if}
    </div>
</div>
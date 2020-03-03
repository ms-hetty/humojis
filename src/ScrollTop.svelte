<script>
	import Faq from './Faq.svelte';
	import About from './About.svelte';
</script>

<style>
    /* General and Desktop styles */
    .scrolltop {
        position: relative;
        background: #18AC02;
    }
    .up {
        width: 48px;
        height: 48px;
        background: #0052CC;
        position: sticky;
        bottom: 40px;
        margin-top: 40px;
        margin-left: 40px;
    }
    .up a {
        padding: 10px 13px;
        display: block;
    }
	/* Mobile styles */
	@media (max-width: 1023px) {
        .up {
            margin-left: calc(100vw - 60px)
        }
	}
</style>

<div class="scrolltop clearfix">
    <About />
    <Faq />
    <div class="up"><a href="#top"><img src="/img/arrow-up.svg" alt="Scroll to top" title="Scroll to top"></a></div>
</div>
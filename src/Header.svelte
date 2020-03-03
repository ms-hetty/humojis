<script>

</script>

<style>
    /* General and Desktop styles */
    header {
        background-color: #CC0085;
        position: relative;
        grid-area: 1 / 1 / 1 / 1;
        padding: 0 0 0 40px;
    }

    h1 {
        font-family: 'Oswald', Arial, Helvetica, sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        padding-top: 27px;
        padding-bottom: 15px;
        font-size: 36px;
    }

    a {
		color: #ffffff;
		text-decoration: none;
	}
    a:hover {
        text-decoration: underline;
    }
    a.current {
        text-decoration: underline;
    }
    ul {
        padding: 0;
        margin: 0 0 0 15px;
        list-style-image: url('/img/arrow-right.svg')
    }
    ul li {
        padding: 0 0 12px 0;
        font-size: 20px;
    }

    ::-moz-selection {
        color: #CC0085;
    }
    ::selection {
        color: #CC0085;
    }


	/* Mobile styles */
	@media (max-width: 1023px) {
        header {
            padding: 0 12px;
        }
        h1 {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        ul {
            padding-bottom: 6px;
        }
        ul li {
            float: left;
            margin-left: 30px;
        }
        ul li:first-child {
            margin-left: 0;
        }
	}
</style>

<header>
    <h1>Humankind as Emojis</h1>
    <nav>
        <ul class="clearfix">
            <li><a href="#top" class="current">Play</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#faq">FAQ</a></li>
        </ul>
    </nav>
</header>
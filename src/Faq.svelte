<script>

</script>

<style>
    /* General and Desktop styles */
    .faq {
        background-color: #18AC02;
        padding: 0 40px 40px 490px;
		color: #ffffff;
		font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    }

    h2 {
        padding: 35px 40px 0 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 40px;
    }

    .question,
    .answer {
        font-size: 20px;
        margin: 0 0 20px 0;
        max-width: 660px;
    }

    .question {
        font-weight: 700;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    ul {
        list-style-image: url('/img/arrow-right.svg')
    }
    ul li {
        font-size: 20px;
    }

    a {
        color: white;
    }
    a:hover {
        background: #ffffff;
        color: #18AC02;
    }

    .paypal-btn {
        background: #CC0085;
        color: #fff;
        border: 0;
        height: 48px;
        padding: 0 17px;
        cursor: pointer;
    }
    .paypal-btn:hover {
        color: #CC0085;
        background: #ffffff;
    }

	/* Mobile styles */
	@media (max-width: 1023px) {
        .faq {
            padding: 0 72px 0 12px;
        }
        h2 {
            padding: 15px 0 16px 0;
            margin-bottom: 16px;
        }
        .question {
            margin-top: 16px;
            margin-bottom: 0;
        }
	}
</style>

<div class="faq clearfix" id="faq">
    <h2>Frequently Asked Questions</h2>
    <p class="question">Why did you create this project?</p>
    <p class="answer">The answer is above. :-)</p>

    <p class="question">What data source did you use?</p>
    <p class="answer">This project is based on the <a href="https://population.un.org/wpp/DataQuery/" rel="noopener" target="_blank">World Population Prospects 2019 report</a> of the United Nations. They have a handy tool to download all data in an excel compatible format.</p>

    <p class="question">Why did you define only four age categories?</p>
    <p class="answer">I've used all the available emojis to represent the ages of people. Specifically: baby (0-4 years), girl/boy (5-19 years), woman/man (20-64 years), old women/old man (above 64 years).</p>

    <p class="question">Why are all emojis yellow?</p>
    <p class="answer">I didn't want to represent skin colors for various reasons:</p>
    <ul class="answer">
        <li>Only a handful of countries gather data on the skin tones of people, so there isn't any report from the UN or similar international bodies</li>
        <li>It is not an option to assign a skin tone to a country, because in most countries live people with various skin tones</li>
        <li>Existing estimates of the global skin tones distribution are very old and based on outdated, colonialistic world views</li>
    </ul>
    <p class="answer">I am aware that the yellow emojis often are read as representing only White people. However, in this project, yellow emojis are the best choice despite their shortcomings. </p>

    <p class="question">What about people who don't identify as a woman or a man?</p>
    <p class="answer">The Unicode standard defines gender-neutral emojis, but the UN does not provide a third gender category in their reports - despite legal recognition for non-binary people in some countries.</p>

    <p class="question">Are all people wonderful?</p>
    <p class="answer">Yes.</p>

    <p class="question">Really?</p>
    <p class="answer">Yes.</p>

    <p class="question">Why can't I see visualizations of the years before 1950?</p>
    <p class="answer">1950 is the first year that is provided in the report by the United Nations.</p>

    <p class="question">What is the meaning of the domain name humojis.world?</p>
    <p class="answer">It is the name of the project. It's a combination of Humankind and Emojis. Simply humojis.</p>

    <p class="question">Why is the website responding so slowly?</p>
    <p class="answer">I am aware that the website responds slowly. I want to optimize the speed but didn't find time until now. The underlying cause is that on every change, all emojis and their positions are randomly re-calculated. If you like to work on a fix, <a href="https://github.com/ms-hetty/humojis" target="_blank" rel="noopener">please send me a pull request on Github</a>.</p>

    <p class="question">Is the website accessible?</p>
    <p class="answer">The website is accessible to people with various impairments. I've used standard HTML controls, considered contrasts, etc. But unfortunately, it's not optimized for people who use screen readers. If you have ideas on how to optimize this website, please get in contact with me.</p>

    <p class="question">Is the project open source, and can I contribute?</p>
    <p class="answer">Yes. You can <a href="https://github.com/ms-hetty/humojis" target="_blank" rel="noopener">access the Github repository</a>. It is licensed under Creative Commons Attribution-NonCommercial 4.0 International License. <a href="https://github.com/ms-hetty/humojis" target="_blank" rel="noopener">I am happy to get pull requests to improve the project</a>.</p>

    <p class="question">What tools and services did you use to create this project?</p>
    <p class="answer">I've used various tools and services:</p>
    <ul class="answer">
        <li>Excel for data editing</li>
        <li><a href="https://www.figma.com/" rel="noopener" target="_blank">Figma</a> to design the wireframes and visual layout</li>
        <li><a href="https://code.visualstudio.com/" rel="noopener" target="_blank">Visual Studio Code</a> to write code</li>
        <li><a href="https://svelte.dev/" rel="noopener" target="_blank">Svelte</a> framework as the basis of the application</li>
        <li><a href="https://github.com/necolas/normalize.css" rel="noopener" target="_blank">normalize.css</a> as CSS basis </li>
        <li><a href="https://www.netlify.com/" rel="noopener" target="_blank">Netlify</a> for hosting</li>
        <li><a href="https://www.github.com/" rel="noopener" target="_blank">GitHub</a> for hosting the code repository</li>
        <li><a href="https://www.mozilla.org/en-US/firefox/new/" rel="noopener" target="_blank">Firefox</a> for testing</li>
    </ul>

    <p class="question">Can I donate to show my support for this project?</p>
    <p class="answer">Yes, you can donate via Paypal. Please, click the button: </p>

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="answer" rel="noopener">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="AXUFT4AZGJXWA" />
        <input class="paypal-btn" type="submit" name="submit" value="Donate with PayPal" alt="Donate with PayPal" />
    </form>

    <p class="question">How can I reach you?</p>
    <p class="answer">You reach me best via email: stefanie -at- hetjens.com</p>
</div>
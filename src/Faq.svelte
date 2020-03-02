<script>

</script>

<style>
    /* General and Desktop styles */
    .faq {
        background-color: #19B302;
        padding: 0 40px 40px 470px;
		color: #ffffff;
		font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    }

    h2 {
        padding: 35px 40px 40px 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }

    .question,
    .answer {
        font-size: 20px;
        margin: 0 0 20px 0;
        max-width: 770px;
    }

    .question {
        font-weight: 700;
        margin-top: 40px;
    }

	/* Tablet styles */
	@media (max-width: 1025px) {
	}

	/* Mobile styles */
	@media (max-width: 760px) {
        .faq {
            padding: 0 72px 0 12px;
        }
        h2 {
            padding: 15px 0 16px 0;
        }
	}
</style>

<div class="faq clearfix" id="faq">
    <h2>FAQ?!</h2>
    <p class="question">Why did you create this project?</p>
    <p class="answer">The answer is above. :-)</p>

    <p class="question">What data source did you use?</p>
    <p class="answer">This project is based on the World Population Prospects 2019 report of the United Nations. They have a handy tool to download all data in an excel compatible format.</p>

    <p class="question">Why did you define only four age categories?</p>
    <p class="answer">I've used all the emojis there are to show the age of people. Specifically: baby (0-4 years), girl/boy (5-19 years), woman/man (20-64 years), old women/old man (above 64 years). </p>

    <p class="question">Why are all emojis yellow?</p>
    <p class="answer">I didn't want to show skin colors for various reasons:</p>
    <ul class="answer">
        <li>Only a hand full of countries gather data on the race or skin tones of people, so there isn't any detailed report from the UN or similar international bodies</li>
        <li>Tt is not an option to assign a skin tone to a country, because in most countries, people with various skin tones live.</li>
        <li>Existing estimations of the global skin tones distribution are very old and based on colonialistic world views</li>
    </ul>
    <p class="answer">I am aware that the yellow emojis often are read as representing only White people. For this reason, I decided using light skin tone emojis for myself some years ago. In this project, yellow emojis are the best choice despite their shortcomings. </p>

    <p class="question">Are all people wonderful?</p>
    <p class="answer">Yes.</p>

    <p class="question">Why can't I see years before 1950?</p>
    <p class="answer">1950 is the first year that is provided in the report by the United Nations.</p>

    <p class="question">What is the meaning of the domain name humojis.world?</p>
    <p class="answer">It is the name of the project. It's a combination of Humankind and Emojis. Simply humojis.</p>

    <p class="question">Why is the website responding so slowly?</p>
    <p class="answer">I am aware that the website responds slowly. I still want to optimize the speed but didn't have time until now. The underlying cause is that on every change, all emojis and their positions are randomly re-calculated. If you like to work on a fix, please send me a pull request on Github.</p>

    <p class="question">Is the website accessible?</p>
    <p class="answer">The website is accessible to people with various impairments. I've used standard HTML controls, considered contrasts, etc. But unfortunately, it's not optimized for people who use screen readers. If you have ideas on how to optimize this website, please get in contact with me.</p>

    <p class="question">Is the project open source, and can I contribute?</p>
    <p class="answer">Yes. You can access the Github repository. It is licensed under Creative Commons Attribution-NonCommercial 4.0 International License. I am happy to get pull requests to improve the project.</p>

    <p class="question">What tools and services did you use to create this project?</p>
    <p class="answer">I've used various tools and services:</p>
    <ul class="answer">
        <li>Excel for data editing</li>
        <li>Figma to design the wireframes and visual layout</li>
        <li>Visual Studio Code to write code</li>
        <li>Svelte framework as the basis of the application</li>
        <li>normalize.css as CSS basis </li>
        <li>Netlify for hosting</li>
        <li>GitHub for hosting the code repository</li>
        <li>Firefox for testing</li>
    </ul>

    <p class="question">Can I donate to show my support for this project?</p>
    <p class="answer">Yes, you can donate via Paypal. Please click on this button: </p>

    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="answer">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="AXUFT4AZGJXWA" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_CH/i/scr/pixel.gif" width="1" height="1" />
    </form>

    <p class="question">How can I reach you?</p>
    <p class="answer">You can reach me best via email: stefanie -at- hetjens.com</p>
</div>
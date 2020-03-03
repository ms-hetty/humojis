<script>

    import { createEventDispatcher } from 'svelte';
    
    export let filter = {
		year: 1950,
		region: 'any',
		gender: 'any',
		age: 'any'
    };

    let show_form = false;

</script>

<style>
    /* General and Desktop styles */
    form {
        background-color: #18AC02; /*#19B302; */
        position: relative;
        grid-area: 2 / 1 / 2 / 1;
        padding: 0 0 40px 40px;
    }

    button.toggle {
        display: none;
    }
    h2 {
        padding: 35px 40px 0 0;
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
    }
    a.headline {
        color: white;
        text-decoration: none;
        cursor: default;
    }
    ::-moz-selection {
        color: #18AC02;
    }
    ::selection {
        color: #18AC02;
    }
    .content {
        padding-right: 40px;
    }
    .item {
        display: flex;
        font-size: 20px;
        padding-top: 50px;
    }
    label {
        width: 110px;
        flex-shrink: 0;
    }
    output {
        padding: 0 9px;
        flex-shrink: 0;
        width: 46px;
    }
    input[type=range] {
        -webkit-appearance: none;
        margin: 18px 0;
        width: 100%;
    }

    /* INPUT RANGE */
    input[type=range] {
        background: #18AC02;
    }
    input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        margin: 0;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
        background: #ffffff;
        border-radius: 0px;
        border: 1px solid #000000;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 1px solid #000000;
        height: 28px;
        width: 10px;
        border-radius: 0px;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -10.8px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #ffffff;
    }
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
        background: #ffffff;
        border-radius: 0px;
        border: 1px solid #000000;
    }
    input[type=range]::-moz-range-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 1px solid #000000;
        height: 28px;
        width: 10px;
        border-radius: 0px;
        background: #ffffff;
        cursor: pointer;
    }
    input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: #f0f0f0;
        border: 1px solid #000000;
        border-radius: 0px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    }
    input[type=range]::-ms-fill-upper {
        background: #ffffff;
        border: 1px solid #000000;
        border-radius: 0px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
    }
    input[type=range]::-ms-thumb {
        box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
        border: 1px solid #000000;
        height: 28px;
        width: 10px;
        border-radius: 0px;
        background: #ffffff;
        cursor: pointer;
        height: 8.4px;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: #ffffff;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: #ffffff;
    }



    /* SELECTS */
    select {
        display: block;
        font-size: 20px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #000;
        line-height: 24px;
        padding: 0 7px;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #000;
        border-radius: 0em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        /*background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), */
        background-image: url('/img/arrow-down-black.svg'), linear-gradient(to bottom, #ffffff 0%,#ffffff 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 7px center, 0 0;
    }
    select::-ms-expand {
        display: none;
    }
    select:focus {
        border-color: #000;
        color: #000;
        outline: none;
    }
    select option {
        font-weight: 400;
        font-size: 16px;
    }

	/* Mobile styles */
	@media (max-width: 1023px) {
        form {
            padding: 0 12px;
        }
        h2 {
            padding-top: 15px;
            padding-bottom: 16px;
            padding-right: 0;
        }
        h2 a.headline,
        button.toggle {
            cursor: pointer;
        }
        .item {
            padding-top: 18px;
            padding-bottom: 11px;
            padding-right: 0;
        }
        .content {
            padding-right: 0;
        }
        button.toggle {
            display: block;
            width: 48px;
            height: 48px;
            float: right;
            background: #18AC02 url('/img/arrow-down.svg') center center no-repeat;
            border: 0;
            font-size: 0.25px;
            color: #18AC02;
        }
        form.show button.toggle {
            background-image: url('/img/arrow-up.svg');
        }
        form .content {
            display: none;
            padding-bottom: 20px;
        }
        form.show .content {
            display: block;
        }
	}
</style>

<form class:show={show_form === true}>
    <h2>
        <a class="headline" href="#form" on:click|preventDefault={() => show_form = !show_form}>
            <button class="toggle">Button to show and hide controls</button>
            Adjust and see the changes in comparison to today’s world
        </a>
    </h2>
    <div class="content">
        <div class="item">
            <label for="year">Year</label>
            <output for="year" name="outputyear" id="outputyear">{filter.year}</output>
            <input type="range" id="year" name="year" min={1950} max={2020} bind:value={filter.year}>
        </div>

        <div class="item">
            <label for="gender">Gender</label>
            <select name="gender" id="gender" bind:value={filter.gender}>
                <option value="any">All</option>
                <option value="Female">Only Women</option>
                <option value="Male">Only Men</option>
            </select>
        </div>

        <div class="item">
            <label for="age">Age</label>
            <select name="age" id="age"  bind:value={filter.age}>
                <option value="any">All</option>
                <option value="Babys">Babys</option>
                <option value="Kids">Children</option>
                <option value="Adults">Adults</option>
                <option value="Seniors">Seniors</option>
            </select>
        </div>

        <div class="item">
            <label for="region">Region</label>
            <select name="region" id="region" bind:value={filter.region}>
                <option value="any">Whole World</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option value="Latin America and the Caribbean">Latin America & Caribbean</option>
                <option>Northern America</option>
                <option>Oceania</option>
            </select>
        </div>
    </div>
</form>
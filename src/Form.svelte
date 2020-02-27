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
        background-color: #19B302;
        position: relative;
        grid-area: 2 / 1 / 2 / 1;
        padding: 0 0 0 40px;
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
    ::-moz-selection {
        color: #19B302;
    }
    ::selection {
        color: #19B302;
    }
    .item {
        display: flex;
        font-size: 20px;
        padding-top: 50px;
    }
    label {
        width: 110px;
    }


	/* Tablet styles */
	@media (max-width: 1025px) {
	}

	/* Mobile styles */
	@media (max-width: 760px) {
        form {
            padding: 0 12px;
        }
        h2 {
            padding-top: 15px;
            padding-bottom: 16px;
            padding-right: 0;
        }
        .item {
            padding-top: 18px;
            padding-bottom: 11px;
        }
        button.toggle {
            display: block;
            width: 48px;
            height: 48px;
            float: right;
            background: #19B302 url('/img/arrow-down.svg') center center no-repeat;
            border: 0;
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
        <button class="toggle" on:click|preventDefault={() => show_form = !show_form}></button>
        Adjust and see the changes in comparison to today’s world
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
                <option value="Female">Only Female</option>
                <option value="Male">Only Male</option>
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
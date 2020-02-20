<script>
    export let display = {
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_women: 0,
        old_men: 0
	};
	export let reference = {
        baby_girls: 0,
        baby_boys: 0,
		girls: 0,
		boys: 0,
		women: 0,
		men: 0,
		old_women: 0,
        old_men: 0
    };

    export let filter = {
		year: 1950,
		region: 'any',
		gender: 'any',
		age: 'any'
	}
	
	//Init
	let data = [];
	let loaded = false;

	async function loadData() {
		const res = await fetch('/data/data.json');
		const text = await res.json();

		if (res.ok) {
			data = text;
			loaded = true;
			display = getData();
			reference = getData();
			return true;
		} else {
			throw new Error('Could not load data.');
		}
	};
	loadData();

	$: {
		display = getData();
		let f = filter;
	};

	function getData() {
		let result = {
			baby_girls: 0,
			baby_boys: 0,
			girls: 0,
			boys: 0,
			women: 0,
			men: 0,
			old_women: 0,
			old_men: 0
		};

		if (loaded) {
			for(let i=0; i < data[filter.year.toString()].length; i++) {
        		let row = data[filter.year.toString()][i];
        		if (
            		((filter.region == 'any') || (filter.region == row.region)) &&
					((filter.gender == 'any') || (filter.gender == row.gender))
        			) {
						if ((filter.age == 'any') || (filter.age == 'Babys')) {
							if ((filter.gender == 'Female') || ((filter.gender == 'any') && (row.gender == 'Female')))
								result.baby_girls += row.baby;
							if ((filter.gender == 'Male') || ((filter.gender == 'any') && (row.gender == 'Male')))
								result.baby_boys += row.baby;
						}	
							
						if ((filter.age == 'any') || (filter.age == 'Kids')) {
							if ((filter.gender == 'Female') || ((filter.gender == 'any') && (row.gender == 'Female')))
            					result.girls += row.child;
							if ((filter.gender == 'Male') || ((filter.gender == 'any') && (row.gender == 'Male')))
            					result.boys += row.child;						
						}

            			if ((filter.age == 'any') || (filter.age == 'Adults')) {
            				if ((filter.gender == 'Female') || ((filter.gender == 'any') && (row.gender == 'Female')))
            					result.women += row.adult;
							if ((filter.gender == 'Male') || ((filter.gender == 'any') && (row.gender == 'Male')))
            					result.men += row.adult;
						}

            			if ((filter.age == 'any') || (filter.age == 'Seniors')) {
            				if ((filter.gender == 'Female') || ((filter.gender == 'any') && (row.gender == 'Female')))
            					result.old_women += row.senior;
							if ((filter.gender == 'Male') || ((filter.gender == 'any') && (row.gender == 'Male')))
            					result.old_men += row.senior;
						}
					}
			}
		}

		return result;
	}
</script>

<style>

</style>

<span></span>
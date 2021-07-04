<script>
	export let toggle = false;
	export let pressed = false;

	export let outlined = false;

	export let small = false;
	export let extrasmall = false;
	export let large = false;

</script>

<button
	on:click={() => {
		pressed = toggle && !pressed;
	}}
	on:click
	class='base {$$props.class}'

	class:filled={!outlined}
	class:outlined={outlined}

	class:pressed={toggle && pressed}

	class:regular={!(small || large)}
	class:small={small}
	class:extrasmall={extrasmall}
	class:large={large}
	type='button'
>
	<slot />
</button>

<style>
    .base {
        @apply transition-all duration-150 ease-linear box-border font-bold uppercase rounded shadow;
    }

    .base:hover {
        @apply shadow-md;
    }

    /* VARIANTS */
    .filled {
        @apply bg-blueGray-500 text-white outline-none;
    }

    .filled:focus {
        @apply outline-none;
    }

    .filled.pressed {
        @apply bg-blueGray-600;
    }

    .outlined {
        @apply border text-blueGray-500 border-solid border-blueGray-500;
    }

    .outlined.pressed {
        @apply bg-blueGray-500 text-white;
    }

    /* SIZES */
    .regular {
        @apply px-6 py-3 text-sm;
    }

    .small {
        @apply px-4 py-2 text-xs ;
    }

    .extrasmall {
        @apply px-3 py-1 text-xs ;
    }

    .large {
        @apply px-8 py-3 text-base;
    }
</style>
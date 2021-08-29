<script>
	import { DateTime, Duration, Interval } from 'luxon';
	import { List } from 'immutable';
	import { onDestroy, onMount } from 'svelte';

	const updatePeriod = 500;

	let workTimeUpdateTimer;
	let totalTime = 0;

	export let timeFormat = 'hh:mm:ss';
	export let intervals = List();
	export let isPaused = false;
	export let onUpdate = () => {};

	intervals = intervals.push(Interval.after(DateTime.now(), 0).toISO());

	export const togglePause = () => {
		isPaused = !isPaused;

		if (!isPaused) {
			intervals = intervals.push(Interval.after(DateTime.now(), 0).toISO());
		}
	};

	onMount(() => {
		const updateTimer = () => {
			if (isPaused) {
				return;
			}

			const newInterval = Interval.fromDateTimes(
				Interval.fromISO(intervals.last()).start,
				DateTime.now()
			).toISO();
			const newIntervals = intervals.set(-1, newInterval);
			const newTotalTime = newIntervals
				.reduce(
					(durationSum, interval) => Interval.fromISO(interval).toDuration().plus(durationSum),
					Duration.fromMillis(0)
				)
				.toFormat(timeFormat);

			if (totalTime !== newTotalTime) {
				totalTime = newTotalTime;
				intervals = intervals.set(-1, newInterval);
				onUpdate(intervals);
			}
		};
		updateTimer();

		window.updateTimer = updateTimer;
		workTimeUpdateTimer = setInterval(updateTimer, updatePeriod);
	});

	onDestroy(() => {
		clearInterval(workTimeUpdateTimer);
	});
</script>

<div class={$$props.class}>
	{totalTime}
</div>

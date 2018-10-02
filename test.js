import test from 'ava';
import stdby from '.';

test('title', t => {
	const err = t.throws(() => {
		stdby(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(stdby('unicorns'), 'unicorns & rainbows');
});

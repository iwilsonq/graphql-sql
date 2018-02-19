import { get } from '../';

const items = [
	{ name: 'item-0' },
	{ name: 'item-1' },
	{ name: 'item-2' },
	{ name: 'item-3' },
	{ name: 'item-4' },
	{ name: 'item-5' }
];

describe('Utilities', () => {
	describe('get', () => {
		it('by default uses limit=20 and offset=0', () => {
			const actual = get(items);
			expect(actual).toEqual(expect.arrayContaining(items));
		});
		it('filters a list of items by limit and offset', () => {
			const actual = get(items, { limit: 2, offset: 2 });
			expect(actual).toEqual(
				expect.arrayContaining([{ name: 'item-2' }, { name: 'item-3' }])
			);
		});
	});
});

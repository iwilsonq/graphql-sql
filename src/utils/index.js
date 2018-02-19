// get takes a list of items and a params object and filters the list
export const get = (items = [], { limit = 20, offset = 0 } = {}) => {
	offset = parseInt(offset);
	limit = parseInt(limit) + offset;
	return items.slice(offset, limit);
};

const getTime = (date) => new Date(date).getTime();

module.exports = {
	byPrimaryGenreName(prev, next) {
		return prev.primaryGenreName.localeCompare(next.primaryGenreName);
	},
	byRelaseDate(prev, next) {
		return getTime(prev.releaseDate) - getTime(next.releaseDate);
	},
};

const copy = (o) => {
	return JSON.parse(JSON.stringify(o));
}

export {
	copy
}
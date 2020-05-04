
const roundom = (array, r = Math.random()) => {
    let acc = r;
    return array.map(x => {
        const integer = Math.floor(x);
        const fractional = x - integer;

        acc += fractional;
        if (acc >= 1) {
            acc -= 1;
            return integer + 1;
        } else {
            return integer;
        }
    });
};

export default roundom;
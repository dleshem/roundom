
const round = (x, r) => {
    if (Number.isInteger(x)) {
        return x;
    } else {
        const integer = Math.floor(x);
        const fractional = x - integer;
        if (r < fractional) {
            return integer + 1;
        } else {
            return integer;
        }
    }
};

const roundom = (array, r = Math.random()) => {
    let slack = 0;
    return array.map(x => {
        let rounded;
        if (Number.isInteger(x)) {
            rounded = x;
        } else {
            const xPlusSlack = x + slack;

            const max = Math.ceil(x);
            const min = Math.floor(x);
            if (xPlusSlack >= max) {
                rounded = max;
            } else if (xPlusSlack <= min) {
                rounded = min;
            } else {
                rounded = round(x, r);
            }
        }
        slack += (x - rounded);
        return rounded ? rounded : 0; // Convert negative zeros to zeros
    });
};

export default roundom;
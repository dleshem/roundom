import roundom from '../src/roundom.js';
import {expect} from 'chai';

const sum = arr => arr.reduce((a,b) => a + b, 0);

describe('roundom', () => {
    it ('conserves integers', () => {
        const array = [1, 2, 3];
        const rounded = roundom(array);
        expect(rounded).to.deep.equal(array);
    });

    it ('conserves integer sum', () => {
        const array = [0.5, -0.5];
        const rounded = roundom(array);
        expect(sum(rounded)).to.equal(sum(array));
    });

    it ('rounds down when needed', () => {
        const r = 0.5 - Number.EPSILON;
        const array = [0.5, -0.5];
        const rounded = roundom(array, r);
        expect(rounded).to.deep.equal([0, 0]);
    });

    it ('rounds up when needed', () => {
        const r = 0.5;
        const array = [0.5, -0.5];
        const rounded = roundom(array, r);
        expect(rounded).to.deep.equal([1, -1]);
    });

    it ('conserves expected values', () => {
        const array = [0.6, 0.5, -1.1];

        const n = 100000;
        const sum = array.map(x => 0);
        for (let i = 0; i < n; ++i) {
            const rounded = roundom(array);
            for (let j = 0; j < sum.length; ++j) {
                sum[j] += rounded[j];
            }
        }
        const average = sum.map(x => x / n);

        for (let i = 0; i < average.length; ++i) {
            expect(average[i]).to.be.approximately(array[i], 0.01);
        }
    });
});
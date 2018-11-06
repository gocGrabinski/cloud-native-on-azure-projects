import * as mod from './module-one';

test('factorThisNumber test - value 0', () => {
    expect(mod.factorThisNumber(0).Elapsed).toBeDefined();
    expect(mod.factorThisNumber(0).Factors).toEqual([]);
});

test('factorThisNumber test - value 1', () => {
    expect(mod.factorThisNumber(1).Elapsed).toBeDefined();
    expect(mod.factorThisNumber(1).Factors).toEqual([1]);
});

test('factorThisNumber test - value 9', () => {
    expect(mod.factorThisNumber(1).Elapsed).toBeDefined();
    expect(mod.factorThisNumber(9).Factors).toEqual([1, 3, 9]);
});

test('getNumberToFactorFromUrl - /factors/1, /factors/22, /factors/333, /factors/4444 ', () => {
    var urls = ['/factors/1', '/factors/22', '/factors/333', '/factors/4444'];
    var expected = [1, 22, 333, 4444];
    urls.forEach((item, index) => {
        expect(mod.getNumberToFactorFromUrl(item)).toEqual(expected[index]);
    });
});

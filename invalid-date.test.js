test('invalid date', () => {
    expect(new Date(NaN)).toEqual(new Date(NaN));
});

describe('findReplace', function() {
  it('finds a word and replaces it within the sentence', function() {
    expect(findReplace("Hello World", "World", "Universe")).to.equal("Hello Universe");
  });
});

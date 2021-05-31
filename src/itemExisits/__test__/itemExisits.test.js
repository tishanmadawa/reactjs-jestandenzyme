

it("input text item test", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
    expect(ReactDOM).toContainElement('input')
})
document.addEventListener('DOMContentLoaded', event => {
    const test = 'App is Running?';
    console.log(event);
    test2(() => {
        return 'test';
    });
    function test2(text) {
        console.log(text);
    }
});

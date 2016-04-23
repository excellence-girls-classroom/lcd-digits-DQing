/**
 * Created by douqing on 16-4-23.
 */
describe('lcdPricese', function() {
    var input;

    beforeEach(function() {
        input=910;
    });

    it('should print correct text', function() {

        spyOn(console, 'log');

        printText(input);

        var expectText ='._.'+'\n'+
                        '|_|'+'\n'+
                        '..|'+
                        '...' + '\n' +
                        '..|' + '\n' +
                        '..|'+
                        '._.' + '\n' +
                        '|.|' + '\n' +
                        '|_|';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

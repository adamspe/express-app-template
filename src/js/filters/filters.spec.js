describe('filters.js', function () {
    beforeEach(function(){
        module('app.filters');
    });

    describe('/ fullName',function(){
        it('/ both',inject(function($filter){
            expect($filter('fullName')({fname:'Bob',sname:'User'})).toBe('Bob User');
        }));
        it('/ first',inject(function($filter){
            expect($filter('fullName')({fname:'Bob'})).toBe('Bob');
        }));
        it('/ last',inject(function($filter){
            expect($filter('fullName')({sname:'User'})).toBe('User');
        }));
        it('/ neither',inject(function($filter){
            expect($filter('fullName')({})).toBe(undefined);
        }));
    });

    describe('/ trim',function(){
        it('/ string',inject(function($filter){
            expect($filter('trim')(' Foo')).toBe('Foo');
        }));
        it('/ non-string',inject(function(trimFilter){
            expect(trimFilter(true)).toBe(true);
            expect(trimFilter(false)).toBe(false);
            expect(trimFilter(null)).toBe(null);
        }));
    });

    describe('/ ellipses',function(){
        it('/ basic',inject(function($filter){
            function randomString(length) {
                var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ',
                    i,text='';
                for(i = 0; i < length; i++) {
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                }
                return text;
            }
            var input = randomString(55),
                input2 = input + 'blah';
            expect($filter('ellipses')(input)).toBe(input);
            expect($filter('ellipses')(input2)).toBe(input+ ' ...');
        }));
        it('/ non-string',inject(function($filter){
            expect($filter('ellipses')(1)).toBe(1);
            expect($filter('ellipses')(false)).toBe(false);
            expect($filter('ellipses')(null)).toBe(null);
        }));
    });
});

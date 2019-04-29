describe('List testing', function () {
    it('Should return an object with all 5 of the registered plates', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");

        assert.deepEqual(townInstance.regList(), { 'CY 13245': 0, 'CT 51263': 0, 'CL 72534': 0, 'CA 99153': 0, 'CY 01152': 0 });
    })
    it('Should return an object with 5 registrations as the others are of invalid formats', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");
        // invalid formats
        townInstance.register("CP 01152"); //wrong town
        townInstance.register("CY01152"); //no space between first 2 and last 5 chars
        townInstance.register("CY 011524"); //too many chars
        townInstance.register("CY 01152"); // repeat of a previous registration

        assert.deepEqual(townInstance.regList(), { 'CY 13245': 0, 'CT 51263': 0, 'CL 72534': 0, 'CA 99153': 0, 'CY 01152': 0 });
    })
    it('Should return an empty object with undefined input', function () {
        var townInstance = TownTrace();
        townInstance.register();
        assert.deepEqual(townInstance.regList(), {});
    })
})
describe('Filter testing', function () {
    it('Should return an array of 5 registrations with undefined parameter', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");

        assert.deepEqual(townInstance.filter(), ['CY 13245', 'CT 51263', 'CL 72534', 'CA 99153', 'CY 01152']);
    })
    it('Should return an array of the 2 registrations from Bellville', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");

        assert.deepEqual(townInstance.filter("Bellville"), ['CY 13245', 'CY 01152']);
    })
    it('Should return an empty array with the filter checking for registration that is not present', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");

        assert.deepEqual(townInstance.filter("Paarl"), []);
    })
    it('Should return an array with all the items registered with an undefined filter', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CT 51263");
        townInstance.register("CL 72534");
        townInstance.register("CA 99153");
        townInstance.register("CY 01152");

        assert.deepEqual(townInstance.filter(), ["CY 13245", "CT 51263", "CL 72534", "CA 99153", "CY 01152"]);
    })
})
describe('Error checking testing', function () {
    it('Should return "valid" as all specifications are met', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");

        assert.equal(townInstance.validity(), "valid");
    })
    it('Should return "invalid" as either 1 or more specifications are not met (including undefined inputs)', function () {
        var townInstance = TownTrace();
        townInstance.register();

        assert.equal(townInstance.validity(), "invalid");
    })
    it('Should return error message for an undefined input', function () {
        var townInstance = TownTrace();
        townInstance.register();

        assert.equal(townInstance.errorText(), "*Please enter your registration");
    })
    it('Should return error message for registration from a different town', function () {
        var townInstance = TownTrace();
        townInstance.register("CP 13245");

        assert.equal(townInstance.errorText(), "*We do not keep track of registrations from that town");
    })
    it('Should return error message for registration that contains either too many or too little characters', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 132452");

        assert.equal(townInstance.errorText(), "*Please enter the registration in a valid format");
    })
    it('Should return error message for registration that does not contain a space between the first 2 and last 5 chars', function () {
        var townInstance = TownTrace();
        townInstance.register("CY313245");

        assert.equal(townInstance.errorText(), "*Please make sure there is a space between the first 2 and last 5 characters");
    })
    it('Should return error message for registration that has already been entered', function () {
        var townInstance = TownTrace();
        townInstance.register("CY 13245");
        townInstance.register("CY 13245");

        assert.equal(townInstance.errorText(), "*This registration has been entered already");
    })
})

var util = require('./util');
var notes = function notes() {

    return {
        post: function (input) {
            return util.promiseResponse(util.constructRequestDetails(input, input.module + "/{id}/Notes", HTTP_METHODS.POST, false));//No I18N
        }
    }
}

module.exports = notes;
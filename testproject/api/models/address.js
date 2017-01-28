module.exports = {
    attributes: {
        ligne1: {
                    type: 'string',
                    required: false
                },
        ligne2: {
                            type: 'string',
                            required: false
                        },
        Ville: {
                            type: 'string',
                            required: false
                        },
        Pays: {
                            type: 'string',
                            required: false
                        },
    // Add a reference to User
    owner: {
      model: 'user'
    }


    },
};

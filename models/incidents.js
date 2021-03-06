let mongoose = require('mongoose');

let incidentModel = mongoose.Schema(
    {
        title: String,
        description: String,
        priority: String,
        createdBy: String,
        assignedTo: String,
        tags: []
    },
    {
        collection: "incidents",
        timestamps: true
    }
);

module.exports = mongoose.model('Incident', incidentModel);
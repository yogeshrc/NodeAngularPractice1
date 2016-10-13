module.exports = function(app){
    app.get('/projects', function(req, res){
        res.json({
        'title': 'My Hobby Projects',
        'projects': [ 'NodeJS', 'AngularJS', 'ExpressJS', 'Arduino', 'GitHub']
        });
    });
};
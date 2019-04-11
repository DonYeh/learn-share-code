const Methods = require('../models/methods');

async function PYHome(req, res) {
    const PYMethods = await Methods.getAll('Python')
    // form here, use login as reference    
    res.render('language-home', {
        locals: {
            language: 'Python',
            methods: PYMethods,
            message: "you're on the python homepage",
            redirect: "/Python"
        }
    });
}

// 

function PYPost(req, res) {

    // if method exists, update content (snippet,desc,vid)
    // else, create new methods with various content

}

function PYMethodPage(req, res) {
    res.send('hello')
}

module.exports = { PYHome, PYPost, PYMethodPage }





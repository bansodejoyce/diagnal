var openGraph = require('open-graph');

var resolver = {
    getOgMetadata: (url) => {

        return new Promise((resolve, reject) => {
            openGraph(url.url, function (err, meta) {
                if (err) {
                    console.log('getOgMetadata :: error :: ', err);
                    reject(err);
                } else {
                    console.log(meta);
                    resolve(meta)
                }
            })
        }).then((result) => {
            return {
                ogTitle: result.title,
                ogDescription: result.description,
                ogImages: result.image.url,
                ogKeywords: result.keywords
            }
        })
    }
};

module.exports = {
    resolver
}
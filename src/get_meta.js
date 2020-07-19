// parser
const cheerio = require('cheerio');
const { urlencoded } = require('express');

const meta_info = (doc) => {
    // use html parser to get meta tags value
    let $ = cheerio.load(doc);

    // values for the meta tags
    let title = $('meta[property="og:title"]').attr('content') || $('title').text() || "undefined";

    let description = $('meta[property="og:description"]').attr('content') || "undefined";

    let image = $('meta[property="og:image"]').attr('content') || "undefined";

    let url = $('meta[property="og:url"]').attr('content') || "undefined";

    // constructing the actual json to send
    let data = {
        "time": Date.now(),
        "title": title,
        "description": description,
        "image": image,
        "url": url
    };

    return data;
}

module.exports = meta_info;
module.exports = function(config) {
    const dev = !!process.env.DEBUG;

    // cli options
    const options = {
      dir: {
        input: "src",
        output: "_site"
      },
    };

    // layout alias
    config.addLayoutAlias('base', 'layout-base.njk');

    // copy static files
    config.addPassthroughCopy("src/css");
    config.addPassthroughCopy("src/js");
    config.addPassthroughCopy("src/images");
    config.addPassthroughCopy("CNAME");

    return options;
}
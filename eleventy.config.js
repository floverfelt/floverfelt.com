export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("**/*.css");
    eleventyConfig.addPassthroughCopy("**/*.ico");
    eleventyConfig.addPassthroughCopy("**/*.svg");
};
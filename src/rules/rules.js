const { ArgumentsHaveDescriptions } = require('./arguments_have_descriptions')

const getRules = (rulePaths) => {
    const rules = new Set([]);

    rules.add(ArgumentsHaveDescriptions)

    return Array.from(rules);
}

module.exports = {
    getRules
}
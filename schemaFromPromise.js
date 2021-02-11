const { SourceMap } = require('graphql-schema-linter/lib/source_map')
const { Schema } = require('graphql-schema-linter/lib/schema')

async function schemaFromPromise(strSchema) {
    return new Promise((resovle) => {
        resovle(strSchema)
    })
}

async function loadSchemaFromStdin(str) {
    const definition = await schemaFromPromise(str);

    if (definition === null) {
        return null;
    }

    const sourceMap = new SourceMap({ stdin: definition });

    return new Schema(definition, sourceMap);
}

module.exports = {
    schemaFromPromise,
    loadSchemaFromStdin
}
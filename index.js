const { validateSchemaDefinition } = require('graphql-schema-linter/lib/validator')
const { loadSchemaFromStdin } = require('./schemaFromPromise')
const { Configuration } = require('graphql-schema-linter/lib/configuration')
const strSchema = require('./schema')
const { groupErrorsBySchemaFilePath } = require('./errorFormatting')

const gogo = async () => {
    const schema = await loadSchemaFromStdin(strSchema)
    const configuration = new Configuration(schema, {});
    // wat?
    //const issues = configuration.validate();
    const formatter = configuration.getFormatter();
    const rules = configuration.getRules();
    const errors = validateSchemaDefinition(schema, rules, configuration);
    const groupedErrors = groupErrorsBySchemaFilePath(errors, schema.sourceMap);
    const formatted = formatter(groupedErrors)
    console.log(formatted)
}
gogo()
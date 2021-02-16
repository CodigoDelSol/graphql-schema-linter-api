const { ArgumentsHaveDescriptions } = require('graphql-schema-linter/lib/rules/arguments_have_descriptions')
const { DefinedTypesAreUsed } = require('graphql-schema-linter/lib/rules/defined_types_are_used')
const { DeprecationsHaveAReason } = require('graphql-schema-linter/lib/rules/deprecations_have_a_reason')
const { DescriptionsAreCapitalized } = require('graphql-schema-linter/lib/rules/descriptions_are_capitalized')
const { EnumValuesAllCaps } = require('graphql-schema-linter/lib/rules/enum_values_all_caps')
const { EnumValuesHaveDescriptions } = require('graphql-schema-linter/lib/rules/enum_values_have_descriptions')
const { EnumValuesSortedAlphabetically } = require('graphql-schema-linter/lib/rules/enum_values_sorted_alphabetically')
const { FieldsAreCamelCased } = require('graphql-schema-linter/lib/rules/fields_are_camel_cased')
const { FieldsHaveDescriptions } = require('graphql-schema-linter/lib/rules/fields_have_descriptions')
const { InputObjectFieldsSortedAlphabetically } = require('graphql-schema-linter/lib/rules/input_object_fields_sorted_alphabetically')
const { InputObjectValuesAreCamelCased } = require('graphql-schema-linter/lib/rules/input_object_values_are_camel_cased')
const { InputObjectValuesHaveDescriptions } = require('graphql-schema-linter/lib/rules/input_object_values_have_descriptions')
const { InterfaceFieldsSortedAlphabetically } = require('graphql-schema-linter/lib/rules/interface_fields_sorted_alphabetically')
const { RelayConnectionArgumentsSpec } = require('graphql-schema-linter/lib/rules/relay_connection_arguments_spec')
const { RelayConnectionTypesSpec } = require('graphql-schema-linter/lib/rules/relay_connection_types_spec')
const { RelayPageInfoSpec } = require('graphql-schema-linter/lib/rules/relay_page_info_spec')
const { TypeFieldsSortedAlphabetically } = require('graphql-schema-linter/lib/rules/type_fields_sorted_alphabetically')
const { TypesAreCapitalized } = require('graphql-schema-linter/lib/rules/types_are_capitalized')
const { TypesHaveDescriptions } = require('graphql-schema-linter/lib/rules/types_have_descriptions')

const getRules = () => {
    const rules = new Set([]);

    rules.add(ArgumentsHaveDescriptions)
    rules.add(DefinedTypesAreUsed)
    rules.add(DeprecationsHaveAReason)
    rules.add(DescriptionsAreCapitalized)
    rules.add(EnumValuesAllCaps)
    rules.add(EnumValuesHaveDescriptions)
    rules.add(EnumValuesSortedAlphabetically)
    rules.add(FieldsAreCamelCased)
    rules.add(FieldsHaveDescriptions)
    rules.add(InputObjectFieldsSortedAlphabetically)
    rules.add(InputObjectValuesAreCamelCased)
    rules.add(InputObjectValuesHaveDescriptions)
    rules.add(InterfaceFieldsSortedAlphabetically)
    rules.add(RelayConnectionArgumentsSpec)
    rules.add(RelayConnectionTypesSpec)
    rules.add(RelayPageInfoSpec)
    rules.add(TypeFieldsSortedAlphabetically)
    rules.add(TypesAreCapitalized)
    rules.add(TypesHaveDescriptions)

    return Array.from(rules);
}

module.exports = {
    getRules
}
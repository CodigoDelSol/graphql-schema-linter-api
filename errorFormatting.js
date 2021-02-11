module.exports = {
    groupErrorsBySchemaFilePath: (errors, schemaSourceMap) => {
        return errors.reduce((groupedErrors, error) => {
            const path = schemaSourceMap.getOriginalPathForLine(
                error.locations[0].line
            );

            const offsetForPath = schemaSourceMap.getOffsetForPath(path);
            error.locations[0].line =
                error.locations[0].line - offsetForPath.startLine + 1;

            groupedErrors[path] = groupedErrors[path] || [];
            groupedErrors[path].push(error);

            return groupedErrors;
        }, {});
    }
}
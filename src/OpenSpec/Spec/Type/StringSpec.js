//use OpenSpec\ParseSpecException;


class StringSpec //extends TypeSpec
{/*
    public function getTypeName(): string
    {
        return 'string';
    }

    public function getRequiredFields(): array
    {
        return ['type'];
    }

    public function getOptionalFields(): array
    {
        return [];
    }
*/
    parse(value)
    {
        let errors = [];

        if (typeof value !== 'string') {
            errors.push([ParseSpecException.CODE_STRING_EXPECTED, "Expected string value for 'string' type spec, but " + (typeof value) + " given."]);
            throw new ParseSpecException('Could not parse the value', ParseSpecException.CODE_MULTIPLE_PARSER_ERROR, errors);
        }

        return value;
    }
}


export default StringSpec;

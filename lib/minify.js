import {print} from '@putout/printer';
import {parse, transform} from 'putout';
import {
    getSecondPassOptions,
    getThirdPassOptions,
    getFirstPassOptions,
} from './plugins.js';

export const minify = (source, options) => {
    const ast = parse(source);
    
    transform(ast, source, getFirstPassOptions(options));
    transform(ast, source, getSecondPassOptions(options));
    transform(ast, source, getThirdPassOptions(options));
    
    const code = print(ast, {
        format: {
            newline: '',
            space: '',
            indent: '',
            splitter: ' ',
            endOfFile: '',
        },
        semantics: {
            comments: false,
            roundBraces: false,
        },
    });
    
    return code
        .replaceAll(',}', '}')
        .replaceAll(',]', ']')
        .replaceAll(';}', '}');
};

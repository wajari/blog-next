import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { duotonelight } from "react-syntax-highlighter/styles/prism";

export const CodeBlockJS = props => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={duotonelight}
            showLineNumbers={true}
            customStyle={{
                fontSize: 16
            }}
            codeTagProps={{
                fontSize: 16
            }}>
            {props.code}
        </SyntaxHighlighter>
    );
};

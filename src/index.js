import { h } from 'preact';
import html from 'preact-html';
import Prism from 'prismjs';

const Code = ({ code, language, className, ...rest }) => (
  <pre
    {...rest}
    class={[`language-${language}`, rest.class, className]
      .filter(Boolean)
      .join(' ')}
  >
    <code class={`language-${language}`}>
      {html(Prism.highlight(code, Prism.languages[language]))}
    </code>
  </pre>
);

export default Code;

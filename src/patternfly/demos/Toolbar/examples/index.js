import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import toolbarSimpleExampleRaw from '!raw!./toolbar-simple-example.hbs';
import toolbarComplexExampleRaw from '!raw!./toolbar-complex-example.hbs';
import ToolbarSimpleExample from './toolbar-simple-example.hbs';
import ToolbarComplexExample from './toolbar-complex-example.hbs';
// import toolbarComplexExampleDoc from '../docs/toolbar-complex.md';
import docs from '../docs/design.md';
// import '../styles.scss';

export const Docs = docs;

export default () => {
  const toolbarSimpleExample = ToolbarSimpleExample();
  const toolbarComplexExample = ToolbarComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example heading="Toolbar Simple Example" handlebars={toolbarSimpleExampleRaw} minHeight="20em">
        {toolbarSimpleExample}
      </Example>
      <Example heading="Toolbar Complex Example" handlebars={toolbarComplexExampleRaw}>
        {toolbarComplexExample}
      </Example>
    </Documentation>
  );
};

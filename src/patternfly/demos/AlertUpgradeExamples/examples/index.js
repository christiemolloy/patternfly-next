import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alertUpgradeExamplesSimpleExampleRaw from '!raw!./alert-upgrade-examples-simple-example.hbs';
import alertUpgradeExamplesComplexExampleRaw from '!raw!./alert-upgrade-examples-complex-example.hbs';
import AlertupgradeexamplesSimpleExample from './alert-upgrade-examples-simple-example.hbs';
import AlertupgradeexamplesComplexExample from './alert-upgrade-examples-complex-example.hbs';
import alertUpgradeExamplesComplexExampleDoc from '../docs/alert-upgrade-examples-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alertUpgradeExamplesSimpleExample = AlertupgradeexamplesSimpleExample();
  const alertUpgradeExamplesComplexExample = AlertupgradeexamplesComplexExample();

  return (
    <Documentation docs={Docs}>
      <Example
        heading="Patternfly3 Alert and Notification are separated"
        handlebars={alertUpgradeExamplesSimpleExampleRaw}
        minHeight="20em"
      >
        {alertUpgradeExamplesSimpleExample}
      </Example>
      <Example
        heading="Patternfly4 Alert (combines notification)"
        handlebars={alertUpgradeExamplesComplexExampleRaw}
        docs={alertUpgradeExamplesComplexExampleDoc}
      >
        {alertUpgradeExamplesComplexExample}
      </Example>
    </Documentation>
  );
};

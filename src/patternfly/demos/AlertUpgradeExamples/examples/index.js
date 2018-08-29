import React from 'react';
import Documentation from '@siteComponents/Documentation';
import Example from '@siteComponents/Example';
import alertUpgradeExamplesSimpleExampleRaw from '!raw!./alert-upgrade-examples-simple-example.hbs';
import alertUpgradeExamplespf4Raw from '!raw!./alert-upgrade-examples-pf4.hbs';
import AlertupgradeexamplesSimpleExample from './alert-upgrade-examples-simple-example.hbs';
import Alertupgradeexamplespf4 from './alert-upgrade-examples-pf4.hbs';
import alertUpgradeExamplesComplexExampleDoc from '../docs/alert-upgrade-examples-complex.md';
import docs from '../docs/code.md';
import '../styles.scss';

export const Docs = docs;

export default () => {
  const alertUpgradeExamplesSimpleExample = AlertupgradeexamplesSimpleExample();
  const alertUpgradeExamplespf4 = Alertupgradeexamplespf4();

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
        handlebars={alertUpgradeExamplespf4Raw}
        docs={alertUpgradeExamplesComplexExampleDoc}
      >
        {alertUpgradeExamplespf4}
      </Example>
    </Documentation>
  );
};

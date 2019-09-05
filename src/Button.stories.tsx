import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('Button123', () => (
    <Button haha="123" onClick={action('onClick')}  />
  ))
  .add('Button456', () => (
    <Button haha="456" onClick={action('onClick')} />
  ))
  .add('ButtonClick', () => (
    <Button haha="789" onClick={action('onClick')} />
  ), { info: { inline: true } })
  .add('ButtonDisable', () => (
    <button disabled={boolean('Disabled', false)}>ddd</button>
  ))
  .add('ButtonDynamicVar', () => {
    const name = text('Name', 'Horse');
    const age = number('Age', 18);

    return <div>Name: {name}<br />Age: {age}</div>;
  }, { notes: '麥克風測試~ 麥克風測試' });

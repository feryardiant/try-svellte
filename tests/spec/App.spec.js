import {render} from '@testing-library/svelte';
import {expect} from '@esm-bundle/chai';
import App from '../../src/App.svelte';

describe('<App>', () => {
  it('renders learn svelte link', () => {
    const {getByText} = render(App);
    const linkElement = getByText(/learn svelte/i);
    expect(document.body.contains(linkElement));
  });
});

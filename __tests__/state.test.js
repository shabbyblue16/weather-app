/**
 * @jest-environment jsdom
 */

/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot, useRecoilValue, snapshot_UNSTABLE } from 'recoil';
import { zipCodeState, enabledState } from '../client/components/state';
import { SearchBar } from '../client/components';

function RecoilObserver({ node, onClick }) {
  const value = useRecoilValue(node);
  React.useEffect(() => onClick(value), [onClick, value]);
  return null;
}

describe('The zipCode state should', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();

  const setup = () => {
    const component = render(
      <RecoilRoot>
        <RecoilObserver node={zipCodeState} onClick={onClick} onChange={onChange} />
        <SearchBar />
      </RecoilRoot>,
    );
    const submit = component.getByTestId('search-submit');
    const input = component.getByTestId('search-input');
    return {
      submit,
      input,
      ...component,
    };
  };
  const { input, submit } = setup();
  test('be an empty string if nothing is entered into the input', () => {
    userEvent.click(submit);
    const initialSnapshot = snapshot_UNSTABLE();
    expect(initialSnapshot.getLoadable(zipCodeState).valueOrThrow()).toBe('');
    expect(initialSnapshot.getLoadable(enabledState).valueOrThrow()).toBe(false);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('change if search is submitted with a 5 digit input', async () => {
    await userEvent.type(input, '97224');
    userEvent.click(submit);
    const testingSnapshot = snapshot_UNSTABLE();
    expect(testingSnapshot.getLoadable(zipCodeState).valueOrThrow()).toBe('97224');
    expect(testingSnapshot.getLoadable(enabledState).valueOrThrow()).toBe(true);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});

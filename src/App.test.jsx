import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import RepositoryProvider from './contexts/RepositoryContext';
import App from './App';

describe('App', () => {
  const renderApp = () =>
    render(
      <RepositoryProvider>
        <App />
      </RepositoryProvider>
    );

  const clickSearchButton = () => {
    fireEvent.change(screen.getByPlaceholderText('Type a repository name...'), {
      target: { value: 'find-contributors' },
    });
    fireEvent.click(screen.getByText('Search'));
  };

  it('should render main page', () => {
    renderApp();

    expect(screen.getByText('FIND CONTRIBUTORS')).toBeInTheDocument();
  });

  it('should render loading spinner', () => {
    renderApp();

    clickSearchButton();

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should search repository', async () => {
    renderApp();

    clickSearchButton();

    expect(await screen.findByTestId('contributors-div')).toBeInTheDocument();
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import RepositoryProvider, {
  RepositoryContext,
} from './contexts/RepositoryContext';
import App from './App';

describe('App', () => {
  const renderApp = () =>
    render(
      <RepositoryProvider>
        <App />
      </RepositoryProvider>
    );

  const renderAppWithProvider = (value) =>
    render(
      <RepositoryContext.Provider value={value}>
        <App />
      </RepositoryContext.Provider>
    );

  it('should render main page', () => {
    renderApp();

    expect(screen.getByText('FIND CONTRIBUTORS')).toBeInTheDocument();
  });

  it('should render loading spinner', () => {
    renderAppWithProvider({ isLoading: true });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should search repository', async () => {
    renderApp();

    fireEvent.change(screen.getByPlaceholderText('Type a repository name...'), {
      target: { value: 'find-contributors' },
    });
    fireEvent.click(screen.getByText('Search'));

    expect(await screen.findByTestId('contributors-div')).toBeInTheDocument();
  });
});

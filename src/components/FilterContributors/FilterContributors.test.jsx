import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import ContributorsProvider from '../../contexts/ContributorsContext';
import FilterContributors from '.';
import RepositoryProvider from '../../contexts/RepositoryContext';

describe('FilterContributors', () => {
  beforeEach(() => {
    render(
      <RepositoryProvider>
        <ContributorsProvider>
          <FilterContributors />
        </ContributorsProvider>
      </RepositoryProvider>
    );
  });

  it('should "List all contributors" button be disabled when clicked', () => {
    fireEvent.click(screen.getByText('List all contributors'));
    expect(screen.getByText('List all contributors')).toBeDisabled();
  });

  it('should "Top 15 contributors" button be disabled when clicked', () => {
    fireEvent.click(screen.getByText('List all contributors'));
    fireEvent.click(screen.getByText('Top 15 contributors'));
    expect(screen.getByText('Top 15 contributors')).toBeDisabled();
  });
});

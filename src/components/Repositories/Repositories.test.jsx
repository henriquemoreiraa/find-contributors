import { render, screen } from '@testing-library/react';
import { describe, expect, it, beforeEach } from 'vitest';
import { RepositoryContext } from '../../contexts/RepositoryContext';
import Repositories from '.';

describe('FilterContributors', () => {
  beforeEach(() => {
    render(
      <RepositoryContext.Provider
        value={{
          repoData: {
            html_url: 'http://localhost:3000',
            name: 'Test Repo',
            forks: 1,
            open_issues: 1,
            stargazers_count: 1,
            owner: {
              html_url: 'http://localhost:3000',
              login: 'Test Owner',
              avatar_url: 'http://localhost:3000',
            },
          },
        }}
      >
        <Repositories />
      </RepositoryContext.Provider>
    );
  });

  it('should render repository name', () => {
    expect(screen.getByText('Test Repo')).toBeInTheDocument();
  });

  it('should render repository forks', () => {
    expect(screen.getByText('1 Forks')).toBeInTheDocument();
  });

  it('should render repository issues', () => {
    expect(screen.getByText('1 Issues')).toBeInTheDocument();
  });

  it('should render repository stars', () => {
    expect(screen.getByText('1 Stars')).toBeInTheDocument();
  });

  it('should render owner name', () => {
    expect(screen.getByText('Test Owner')).toBeInTheDocument();
  });
});

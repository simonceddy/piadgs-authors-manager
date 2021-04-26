import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import AppLayout from './components/AppLayout';
import ResultRow from './components/ResultRow';
import ResultsTable from './components/ResultsTable';
import SearchAuthors from './containers/SearchAuthors';
import Modal from './shared/components/Modal';
import { sortSearchResults } from './store/actions/authorSearchActions';

const tableCols = [
  {
    name: 'Surname',
    key: 'surname'
  },
  {
    name: 'Given Names',
    key: 'givenNames'
  },
];

function App({
  searchResults = [],
  sortCol,
  sortDirection,
  handleSort
}) {
  console.log(searchResults);
  const [authorModalId, setAuthorModalId] = useState(false);

  const onClose = () => setAuthorModalId(false);

  const AuthorModal = useMemo(() => (!authorModalId ? null : (
    <Modal onClose={onClose}>
      <div onClose={onClose} id={authorModalId} />
    </Modal>
  )), [authorModalId]);

  return (
    <AppLayout>
      {AuthorModal}
      <SearchAuthors />
      {searchResults.length < 1 ? null : (
        <ResultsTable
          sortCol={sortCol}
          sortDirection={sortDirection}
          handleSort={handleSort}
          columns={tableCols}
        >
          {searchResults.map((author = {}) => (
            <ResultRow key={author.id} author={author} columns={tableCols} />
          ))}
        </ResultsTable>
      )}
    </AppLayout>
  );
}

const mapStateToProps = (state) => ({
  searchResults: state.authorSearch.results,
  sortCol: state.authorSearch.sortCol,
  sortDirection: state.authorSearch.sortDirection
});

const mapDispatchToProps = (dispatch) => ({
  handleSort: (key) => dispatch(sortSearchResults(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

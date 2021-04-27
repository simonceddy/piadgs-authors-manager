/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AuthorForm from '../components/AuthorForm';
import AuthorSummary from '../components/AuthorSummary';
import MessageBox from '../components/MessageBox';
import { ThemedButton } from '../shared/components/Forms';
import { THEME_COLOUR_CLASSES, THEME_HOVER_CLASSES } from '../shared/consts';
import { setAuthorMessage } from '../store/actions';
import {
  setAuthorData,
  setSelectedTitles,
  updateAuthor
} from '../store/actions/authorActions';

function Author({
  id,
  data,
  selectedTitles,
  setTitles,
  setData,
  message,
  setMessage,
  onClose,
  submitForm
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleChecked = (titleId) => setTitles({
    ...selectedTitles,
    [titleId]: !selectedTitles[titleId]
  });

  useEffect(() => {
    if (!isLoaded) {
      axios.get(`/authors/${id}`)
        .then((res) => {
          if (res.data.data) {
            return Promise.resolve(setData(res.data.data))
              .then(() => Promise.resolve(setTitles(Object.fromEntries(
                data.titles.map(({ id: titleId }) => [titleId, true])
              ))));
          }
          return Promise.resolve(setMessage('There was an error accessing the author data.'));
        })
        .then(() => setIsLoaded(true))
        .catch((err) => console.log(err));
    }
  });

  if (!isLoaded) {
    return (
      <div>Retrieving data...</div>
    );
  }

  return (
    <div className={`${THEME_COLOUR_CLASSES} m-4 p-4 flex-1 border-2 rounded-lg overflow-y-scroll w-11/12`}>
      <div className={`flex flex-row ${THEME_COLOUR_CLASSES} p-2 justify-between items-center`}>
        <ThemedButton
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Stop Editing' : 'Edit'}
        </ThemedButton>
        <ThemedButton
          onClick={onClose}
        >
          Close
        </ThemedButton>
      </div>
      {!message ? null : <MessageBox>{message}</MessageBox>}
      {isEditing ? (
        <AuthorForm
          setValue={(val) => setData(val)}
          author={data}
          onSubmit={submitForm}
          selectedTitles={selectedTitles}
          onSelect={handleChecked}
        />
      ) : (<AuthorSummary author={data} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.author.data,
  selectedTitles: state.author.selectedTitles,
  message: state.messages.message
});

const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setAuthorData(data)),
  setTitles: (selectedTitles) => dispatch(setSelectedTitles(selectedTitles)),
  setMessage: (message = false) => dispatch(setAuthorMessage(message)),
  submitForm: (data) => dispatch(updateAuthor(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Author);

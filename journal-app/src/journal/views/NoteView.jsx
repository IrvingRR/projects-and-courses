import { SaveOutlined, UploadFileOutlined } from '@mui/icons-material'
import { Grid, Typography, Button, TextField, IconButton } from '@mui/material'
import { ImageGallery } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks'; 
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote, startDeletingNoteThunk, startSaveNoteThunk, startUploadingFilesThunk } from '../../redux/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const inputFileRef = useRef();

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {

        const newDate = new Date(date);
        return newDate.toUTCString();

    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect(() => {

        if(messageSaved.length > 0) {
            Swal.fire('Note updated', messageSaved, 'success');
        };

    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch(startSaveNoteThunk());
    };

    const onFileInputChange = ({ target }) => {
        if(target.files.length === 0) return;

        dispatch(startUploadingFilesThunk(target.files));
    };

    const onDeleteNote = () => {
        dispatch(startDeletingNoteThunk());
    };

  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }} alignItems='center'>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{ dateString }</Typography>
        </Grid>
        <Grid item>
            <input type='file' multiple onChange={onFileInputChange} ref={inputFileRef} style={{ display: 'none' }}/>
            <IconButton color='primary' disabled={isSaving} onClick={() => inputFileRef.current.click()}>
                <UploadFileOutlined/>
            </IconButton>
            <Button color='primary' sx={{ paddin: 2 }} onClick={onSaveNote} disabled={isSaving}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1  }}/>
                Save
            </Button>

            <Button color='error' disabled={isSaving} onClick={onDeleteNote}>
                Delete
            </Button>
        </Grid>

        <Grid container>
            <TextField type='text' variant='filled' fullWidth placeholder='Enter a title' label='Title' name='title' sx={{ border: 'none', mb: 1 }} value={ title } onChange={ onInputChange }/>
            <TextField type='text' variant='filled' fullWidth multiline placeholder='What happened today?' minRows={5} name='body' value={body} onChange={onInputChange}/>
        </Grid>

        <ImageGallery images={note.imageUrls}/>
    </Grid>
  );
};
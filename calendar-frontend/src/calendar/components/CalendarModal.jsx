import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useCalendarStore, useUiStore } from '../../hooks';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();
    const { activeEvent, startSavingEvent } = useCalendarStore();
    const [formSubmit, setFormSubmit] = useState(false);

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const onDateChange = (e, changing) => {
        setFormValues({
            ...formValues,
            [changing]: e
        });
    };

    const onCloseModal = () => {
        closeDateModal();
    };

    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const titleClass = useMemo(() => {

        if(!formSubmit) return '';

        return (formValues.title.length > 0)
        ? 'is-valid'
        : 'is-invalid'

    }, [formValues, formSubmit]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSubmit(true)

        const differenceHours = differenceInSeconds(formValues.end, formValues.start);


        if(isNaN(differenceHours) || differenceHours <= 0) {
            console.log('Error in dates');
            Swal.fire('Incorrect dates', 'Check dates introduces', 'error');
            return;
        };

        if(formValues.title.length <= 0) {
            console.log('Title is required');
            return;
        };

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmit(false);  
    };

    useEffect(() => {
        if(activeEvent !== null) {
            setFormValues({ ...activeEvent });
        }
    }, [activeEvent]);

  return (
    <Modal 
        isOpen={isDateModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className='modal'
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
    >
        <h1> { activeEvent?._id ? 'Update event' : 'New event' } </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label>Date and time start</label>
                <ReactDatePicker className='form-control' selected={formValues.start} onChange={(e) => onDateChange(e, 'start') } dateFormat={"Pp"} showTimeSelect/>
            </div>

            <div className="form-group mb-2">
                <label>Date and time end</label>
                <ReactDatePicker className="form-control" placeholder="Fecha inicio" selected={formValues.end} onChange={(e) => onDateChange(e, 'end') } dateFormat={"Pp"} minDate={formValues.start} showTimeSelect/>
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Title and notes</label>
                <input 
                    type="text" 
                    className={`form-control ${titleClass}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={formValues.title}
                    onChange={onInputChange}
                />
                <small id="emailHelp" className="form-text text-muted" >A short description</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control" 
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={formValues.notes}
                    onChange={onInputChange}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Aditional information</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Save</span>
            </button>

        </form>
    </Modal>
  );
}

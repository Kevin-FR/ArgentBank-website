import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import "./style.scss";

import { alertActions } from '../../_store';

export { Alert };

function Alert() {
    const dispatch = useDispatch();
    const location = useLocation();
    const alert = useSelector(x => x.alert.value);

    useEffect(() => {
        // clear alert on location change
        dispatch(alertActions.clear());
    }, [dispatch, location]);

    if (!alert) return null;

    return (
        <div className="container margin-center">
            <div className="m-3">
                <div className={`alert alert-dismissible ${alert.type}`}>
                    {alert.message} <i onClick={() => dispatch(alertActions.clear())} className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    );
}

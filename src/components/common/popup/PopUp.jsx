import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { func, bool, node, string } from 'prop-types';

/**
 * Modal component to display a dialog box.
 * @param {boolean} show - Determines whether the modal is visible or not.
 * @param {function} onClose - Callback function when the close button is clicked.
 * @param {node} children - Content of the modal dialog box.
 * @param {string} modalStyleClass - Optional class name for the modal dialog box.
 * @param {string} title - Title of the modal dialog box.
 * @param {string} modalWrapClass - Custom class to override the wrapper class.
 */
const Modal = ({ show, onClose, children, modalStyleClass, title, modalWrapClass }) => {
	return (
		<>
			{show && children && <div className="backdropStyle" />}
			{show && (
				<div className={`nu-modal ${modalWrapClass}`} id="nu-modal">
					<div className={`modalStyle ${modalStyleClass}`}>
						<div className="model-head-container">
							<div className="model-title-container">
								<span className="model-title">{title}</span>
							</div>
						</div>
						{children}
						<div className="actions">
							<CloseIcon onClick={onClose} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Modal.propTypes = {
	show: bool.isRequired,
	onClose: func.isRequired,
	children: node.isRequired,
	modalStyleClass: string,
	title: string,
	modalWrapClass: string,
};

Modal.defaultProps = {
	modalStyleClass: '',
	title: '',
	modalWrapClass: '',
};

export default Modal;

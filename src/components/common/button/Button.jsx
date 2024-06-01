import React from 'react';
import { bool, func, node, oneOf, oneOfType, string } from 'prop-types';

/**
 * @function Button
 * @param {string} id -ID of the button element.
 * @param {bool} isProcessing - Flag to indicate whether the button is in a processing state or not.
 * @param {string} theme - Theme of the button. Can be either "white" or "blue".
 * @param {string} className -   Additional class name(s) for the button.
 * @param {string} size - Size of the button. Can be either "small", "medium", or "large".
 * @param {bool} disabled -  Flag to disable the button.
 * @param {func} onClick -   Click handler for the button.
 * @param {node} children - Content to be rendered inside the button.
 * @param {string} action -  Type of the button. Can be either "button", "submit", or "reset".
 * @param {string} processingLabel -  Label to be displayed when the button is in a processing state
 */

const Button = ({
	id,
	isProcessing,
	theme,
	className,
	size,
	disabled,
	onClick,
	children,
	action,
	processingLabel,
	...rest
}) => {
	const classes = ['button', `theme-${theme}`, `size-${size}`, className].join(' ').trim();
	return (
		<button
			type={action}
			onClick={onClick}
			className={classes}
			id={id}
			disabled={disabled || isProcessing}
			{...rest}
		>
			{isProcessing && <span className="spinner" />}
			{isProcessing ? processingLabel : children}
		</button>
	);
};
Button.propTypes = {
	children: oneOfType([string, node]).isRequired,
	action: oneOf(['button', 'submit', 'reset']),
	onClick: func,
	className: string,
	id: string,
	isProcessing: bool,
	disabled: bool,
	theme: oneOf(['white', 'blue']),
	size: oneOf(['small', 'medium', 'large']),
	processingLabel: string,
};
Button.defaultProps = {
	action: 'button',
	className: '',
	id: null,
	isProcessing: false,
	theme: 'white',
	size: 'small',
	disabled: false,
	processingLabel: ' Processing...',
};
export default Button;

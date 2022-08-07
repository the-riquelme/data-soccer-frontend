import { InputBox, InputContainer, Label } from './styles';

export const Input = ({ type, placeholder, label, srLabel, min, max, step, value, onChange }) => {
	const inputID = label.split(' ').join('_');

	return (
		<InputContainer>
			<Label htmlFor={inputID} srLabel={srLabel}>{label}</Label>
			<InputBox
				id={inputID}
				type={type}
				placeholder={placeholder}
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={onChange}
			/>
		</InputContainer>
	);
};

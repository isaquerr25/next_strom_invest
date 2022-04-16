import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	InputGroup,
	InputLeftElement,
} from '@chakra-ui/react';
import { FieldConfig, useField } from 'formik';
import { FC, ReactNode } from 'react';
import NumberFormat from 'react-number-format';

type FormInputProps = {
  inputIcon?: ReactNode;
  justRead?: boolean;
  label?: string;
  placeholder?: string;
  type: 'text' | 'password' | 'email' | 'numberShow' | 'number' | 'file'| 'phoneNumber';
  helperText?: string;
} & FieldConfig;

const FormInput: FC<FormInputProps> = ({
	inputIcon,
	label,
	placeholder,
	type,
	helperText,
	justRead,
	...props
}) => {
	const [field, meta] = useField(props);
	const inputId = `form-input-${field.name}`;
	const error = !!meta.error && meta.touched;

	return (
		<FormControl isInvalid={error}>
			{label && <FormLabel htmlFor={inputId}>{label}</FormLabel>}
			<InputGroup>
				{inputIcon && (
					// eslint-disable-next-line react/no-children-prop
					<InputLeftElement pointerEvents="none"  children={ inputIcon} />
				)}
				{type !== 'number' && type !== 'file' && type !== 'numberShow' && type !== 'phoneNumber' && (
					<Input
						id={inputId}
						{...field}
						placeholder={placeholder}
						type={type}
						border="1px"
						borderColor="gray.400"
					/>
				)}
				{type === 'file'  && (
					<>
						<FormLabel id={inputId} >Select a File:</FormLabel>

						<Input
							accept="image/*"
							alignItems={'center'}
							id={inputId}
							{...field}
							placeholder={placeholder}
							type={type}
							border="1px"
							borderColor="gray.400"
						/>

					</>
				)}
				{type === 'phoneNumber' && (
					<NumberFormat
						{...field}
						prefix={'+'}
						customInput={Input}
						border="1px"
						borderColor="gray.400"
						decimalScale={2}
					/>

				)}
				{type === 'number' && (
					<NumberFormat
						{...field}
						thousandSeparator={true}
						prefix={'$'}
						customInput={Input}
						border="1px"
						borderColor="gray.400"
						decimalScale={2}
					/>

				)}
				{type === 'numberShow' && (
					<NumberFormat
						{...field}
						isReadOnly
						thousandSeparator={true}
						prefix={'$'}
						customInput={Input}
						border="1px"
						borderColor="gray.400"
						decimalScale={0}
					/>

				)}
			</InputGroup>
			{!error && helperText && <FormHelperText>{helperText}</FormHelperText>}
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

export default FormInput;

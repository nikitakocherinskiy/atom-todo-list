// eslint-disable-next-line react/prop-types
const Button = ({ text, onClick, styles }) => {
	return (
		<button onClick={onClick} className={styles}>
			{text}
		</button>
	)
}

export default Button

// eslint-disable-next-line react/prop-types
function Input({ label, placeholder, value, inputHandler }) {
	return (
		<div className='mb-2 flex'>
			<label className='block text-sm font-semibold text-gray-800'>
				{label}
			</label>
			<input
				type='text'
				name='id'
				placeholder={placeholder}
				value={value}
				onChange={(e) => inputHandler(e.target.value)}
				required
				className='w-50 px-2 py-1 ml-5  text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40'
			/>
		</div>
	);
}

export default Input;

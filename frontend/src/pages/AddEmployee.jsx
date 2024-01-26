import { useState } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
	const navigate = useNavigate();

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [salary, setSalary] = useState('');
	const [loading, setLoading] = useState(false);

	async function submitHandler(event) {
		event.preventDefault();
		const body = {
			employee_id: id,
			name,
			position,
			salary,
		};
		setLoading(() => true);
		try {
			const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/employee`, {
				body: JSON.stringify(body),
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();
			setLoading(() => false);
			setId('');
			setName('');
			setPosition('');
			setSalary('');
			console.log(data);
		} catch (err) {
			console.error('Error:', err);
			setLoading(false);
		}
	}
	function handleShowData() {
		navigate('/show');
	}
	return (
		<div className='flex flex-col'>
			<h6 className='text-sm'>Add Employee</h6>
			<form className="mt-6">
				<Input
					label='Emp Id'
					placeholder={'id'}
					value={id}
					inputHandler={setId}
				/>
				<Input
					label='Name'
					placeholder={'name'}
					value={name}
					inputHandler={setName}
				/>
				<Input
					label='Position'
					placeholder={'position'}
					value={position}
					inputHandler={setPosition}
				/>
				<Input
					label='Salary'
					placeholder={'Salary'}
					value={salary}
					inputHandler={setSalary}
				/>
			</form>

			<button
				disabled={loading}
				className='border-2 w-24 mt-4'
				id='btn'
				onClick={submitHandler}
			>
				{loading ? 'Submitting...' : 'Submit'}
			</button>
			<button className='border-2 w-24 mt-4' onClick={handleShowData}>
				Show Data
			</button>
		</div>
	);
}

export default AddEmployee;

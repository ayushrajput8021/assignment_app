import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowEmployee() {
	const navigate = useNavigate();

	const [data, setData] = useState([]);

	useEffect(function () {
		async function fetch_data() {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/employee`,
					{
						metdod: 'GET',
					}
				);
				const data = await res.json();
				setData(() => data);
			} catch (error) {
				console.error('Error:', error);
			}
		}
		fetch_data();
	}, []);
	function handleAddData() {
		navigate('/');
	}
	return (
		<div>
			<h6 className='text-sm'>Show Employee</h6>
			<div className='flex flex-col'>
				<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block w-50 py-1 sm:px-6 lg:px-8'>
						<div className='overflow-hidden'>
							<table className='min-w-full text-left text-sm font-light'>
								<thead className='border-b font-medium dark:border-neutral-500'>
									<tr>
										<th scope='col' className='px-6 py-2'>
											Emp Id
										</th>
										<th scope='col' className='px-6 py-2'>
											Name
										</th>
										<th scope='col' className='px-6 py-2'>
											Position
										</th>
										<th scope='col' className='px-6 py-2'>
											Salary
										</th>
									</tr>
								</thead>
								<tbody>
									{data.map((x, i) => (
										<tr key={i} className='border-b dark:border-neutral-500'>
											<td className='whitespace-nowrap px-6 py-2 font-medium'>
												{x.employee_id}
											</td>
											<td className='whitespace-nowrap px-6 py-2'>{x.name}</td>
											<td className='whitespace-nowrap px-6 py-2'>
												{x.position}
											</td>
											<td className='whitespace-nowrap px-6 py-2'>
												{x.salary}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

			<button className='border-2 w-24 mt-4' onClick={handleAddData}>
				Add Data
			</button>
		</div>
	);
}

export default ShowEmployee;
// // <table>
// <tr>
// <th>Id</th>
// <th>Name</th>
// <th>Position</th>
// <th>Salary</th>
// </tr>

// </table>

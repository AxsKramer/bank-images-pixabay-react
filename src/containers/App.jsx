import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import ListImages from '../components/ListImages';

function App() {

	const [ search, setSearch ] = useState('');
	const [ images, setImages] = useState([]);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ totalPages, setTotalPages] = useState(5);

	useEffect(() => {
		const getDataFromAPI = async () => {
			if(search === '' ) return;

			const imagePerPage = 32;
			const key = '1732750-d45b5378879d1e877cd1d35a6';
			const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${currentPage}`;

			const response = await fetch(url);
			const result = await response.json();
			setImages(result.hits);

			// calculating total pages
			const calculateTotalPages = Math.ceil(result.totalHits / imagePerPage );
			setTotalPages(calculateTotalPages);

			// Move display to top
			const jumbotron = document.querySelector('.jumbotron');
			jumbotron.scrollIntoView({ behavior: 'smooth' })
		}
		
		getDataFromAPI();
	}, [search, currentPage])

	// define previous page
	const previousPage = () => {
		const newCurrentPage = currentPage - 1;
		if(newCurrentPage === 0 ) return;
		setCurrentPage(newCurrentPage);
	}

	// define next page
	const nextPage = () => {
		const newCurrentPage = currentPage + 1;
		if(newCurrentPage > totalPages ) return;
		setCurrentPage(newCurrentPage);
	}

	return (
		<div className="container mt-5">
			<div className="jumbotron">
				<h1 className="text-center mb-4 font-weight-bold">Images Search</h1>
				<Form setSearch={setSearch}/>
			</div>
			<div className="row justify-content-center">
				<ListImages images={images} />

				{ (currentPage === 1) ? null : (
					<button type="button" className="btn btn-info mr-1" onClick={previousPage} >
						&laquo; Previous
					</button>
				) }

				{ (currentPage === totalPages) ? null : (
					(search !== '') && (
						<button type="button" className="btn btn-info" onClick={nextPage}>
							Siguiente &raquo;
						</button>
					)
				) }
			</div>
		</div>
	);
}

export default App;
import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { AppActions, fetchData } from '../store/actions';
import { RootState } from '../store/store';

export function AppHeader() {
	const dispatch = useDispatch();
	const isFetched = useSelector<RootState, boolean>(s => s.app.isFetched);	
	function startFetchData() {
		dispatch(fetchData())
	}

	return <Jumbotron fluid>
		<Container fluid="md">
			<h1 className="mb-5">Keep calm, take a deep breath...</h1>
			<Button 
				onClick={() => startFetchData()}
				disabled={isFetched}
				variant={isFetched ? "success" : "primary"}
				>
				Charger les albums
			</Button>
		</Container>
	</Jumbotron>;
}

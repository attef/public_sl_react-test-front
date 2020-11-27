import React, { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Album, User } from '../interfaces';
import { RootState } from '../store/store';
import { DataPlaceHolder } from './DataPlaceHolder';
import { UserWithAlbums } from './UserWithAlbums';

export function AppContent() {
	const users = useSelector<RootState, User[]>(s => s.app.users);
	const albums = useSelector<RootState, Album[]>(s => s.app.albums);
	const isFetched = useSelector<RootState, boolean>(s => s.app.isFetched);

	const albumsByUser = useMemo(() => {
		return users.reduce<{
			[key: number]: Album[]
		}>((s, current) => {
			s[current.id] = albums.filter(a => a.userId === current.id);
			return s;
		}, {});
	}, [albums, users]);

	return <Container fluid="md">
		<Row className="mt-2">
			{!isFetched && <DataPlaceHolder />}
			{isFetched && users.map(user => <Col key={user.id} md={4}>
				<UserWithAlbums user={user} albums ={albumsByUser[user.id]} />
			</Col>)}
		</Row>
	</Container>;
}
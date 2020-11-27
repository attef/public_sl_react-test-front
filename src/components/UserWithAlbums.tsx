import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Album, User } from '../interfaces';
import { AlbumsList } from './AlbumsList';

export function UserWithAlbums({ user, albums }: { user: User; albums: Album[]; }) {
	return <ListGroup>
		<ListGroup.Item variant="dark">{user.username}</ListGroup.Item>
		<AlbumsList albums={albums} />
	</ListGroup>;
}

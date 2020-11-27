import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Album } from '../interfaces';

export function AlbumsList({ albums }: { albums: Album[]; }) {
    return <>
        {albums && albums.map(a => <ListGroup.Item key={a.id}>
            <div className="d-flex flex-row align-items-center">
                <span className="mr-auto">{a.title}</span>
                <div><Button size="sm">Voir</Button></div>
            </div>
        </ListGroup.Item>)}
    </>;
}

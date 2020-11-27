import React from 'react';
import { Col, ListGroup } from 'react-bootstrap';

export function DataPlaceHolder() {
	return <React.Fragment>
		{[1, 2, 3].map(i => <Col key={i}>
			<ListGroup>
				<ListGroup.Item variant="dark">...</ListGroup.Item>
				<ListGroup.Item>...</ListGroup.Item>
				<ListGroup.Item>...</ListGroup.Item>
			</ListGroup>
		</Col>)}
	</React.Fragment>;
}

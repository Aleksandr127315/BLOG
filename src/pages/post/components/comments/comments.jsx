import { useState } from 'react';
import { Icon } from '../../../../components';
import { Comment } from './components';
import styled from 'styled-components';

const CommentsContainer = ({ className, comments }) => {
	const [newComment, setNewComment] = useState('');
	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					value={newComment}
					placeholder="Коментарии..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					size="18px"
					margin="0 0 0 10px"
					onClick={() => {}}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	display: flex;
	margin: 20px auto;
	width: 580px;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		width: 100%;
		height: 120px;
		resize: none;
		font-size: 18px;
	}
`;

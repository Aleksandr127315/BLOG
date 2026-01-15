import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Icon } from '../../../../components';
import { SpecialPanel } from '../comments/components/special-panel/special-panel';
import { useServerRequest } from '../../../../hooks';
import { savePostAsync } from '../../../../actions';
import { sanitizeContent } from './utils';
import styled from 'styled-components';
import { PROP_TYPE } from '../../../../constants';

const PostFormContainer = ({
	className,
	post = { id: null, title: '', imageUrl: '', content: '', publishedAt: null },
}) => {
	const { id, title, imageUrl, content, publishedAt } = post;

	const [imageUrlValue, setImageUrlValue] = useState(imageUrl || '');
	const [titleValue, setTitleValue] = useState(title || '');
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl || '');
		setTitleValue(title || '');
	}, [imageUrl, title]);

	useLayoutEffect(() => {
		if (contentRef.current) {
			contentRef.current.innerHTML = content || '';
		}
	}, [content]);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onSave = async () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		const savedPost = await dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		);

		if (savedPost?.id) {
			navigate(`/post/${savedPost.id}`);
		}
	};

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={(e) => setImageUrlValue(e.target.value)}
			/>
			<Input
				value={titleValue}
				placeholder="Заголовок..."
				onChange={(e) => setTitleValue(e.target.value)}
			/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				editButton={<Icon id="fa-floppy-o" size="21px" onClick={onSave} />}
			/>
			<div
				ref={contentRef}
				contentEditable
				suppressContentEditableWarning
				className="post-text"
			/>
		</div>
	);
};

// const PostFormContainer = ({
// 	className,
// 	post = { id: null, title: '', imageUrl: '', content: '', publishedAt: null },
// }) => {
// 	const {
// 		id,
// 		title,
// 		imageUrl,
// 		content,
// 		publishedAt,
// 	} = post
// 	const [imageIrlValue, setImageIrlValue] = useState(post.imageUrl);
// 	const [titleValue, setTitleValue] = useState(post.title);
// 	const contentRef = useRef(null);

// 	useLayoutEffect(() => {
// 		setImageIrlValue(post.imageUrl);
// 		setTitleValue(post.title);
// 	}, [post.imageUrl, post.title]);

// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const requestServer = useServerRequest();

// 	const onSave = () => {
// 		const newContent = sanitizeContent(contentRef.current.innerHTML);

// 		dispatch(
// 			savePostAsync(requestServer, {
// 				id,
// 				imageUrl: imageIrlValue,
// 				title: titleValue,
// 				content: newContent,
// 			}),
// 		).then(({ id }) => navigate(`/post/${id}`));
// 	};

// 	const onImageChange = ({ target }) => setImageIrlValue(target.value);
// 	const onTitleChange = ({ target }) => setTitleValue(target.value);

// 	return (
// 		<div className={className}>
// 			<Input
// 				value={imageIrlValue}
// 				placeholder="Изображение..."
// 				onChange={onImageChange}
// 			/>
// 			<Input
// 				value={titleValue}
// 				placeholder="Заголовок..."
// 				onChange={onTitleChange}
// 			/>
// 			<SpecialPanel
// 				id={id}
// 				publishedAt={publishedAt}
// 				margin="20px 0"
// 				editButton={
// 					<Icon
// 						id="fa-floppy-o"
// 						margin="0 10px 0 0"
// 						size="21px"
// 						onClick={onSave}
// 					/>
// 				}
// 			/>
// 			<div
// 				ref={contentRef}
// 				contentEditable={true}
// 				suppressContentEditableWarning={true}
// 				className="post-text"
// 			>
// 				{content}
// 			</div>
// 		</div>
// 	);
// };

export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .post-text {
		border: 1px solid #000;
		min-height: 80px;
		font-size: 18px;
		white-space: pre-line;
	}
`;
PostForm.propTypes = {
	post: PROP_TYPE.POST.isRequired,
};

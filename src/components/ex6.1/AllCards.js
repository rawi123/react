import React from 'react';
import CardComp from './CardCom';
import './style.css';

class AllCards extends React.Component {
	render() {
		return (
			<div className="body">
				<CardComp
					explore="https://unsplash.com/s/photos/view"
					share="https://www.google.com/search?q=image&sxsrf=AOaemvI9FZ0hS8iCVH5vPFSHM-sl7c6J9w:1634474702587&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLw6rgvNHzAhWi2uAKHQF9AQcQ_AUoAXoECAIQAw&biw=1920&bih=937&dpr=1#imgrc=tTplitM2kjOQtM"
					description="best Camera lense photo"
					title="camera lense"
					alt="lense"
					img="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
				/>
				<CardComp
					explore="https://www.pixsy.com/academy/image-user/verify-image-source-copyright-owner/"
					share="https://www.google.com/search?q=image&sxsrf=AOaemvI9FZ0hS8iCVH5vPFSHM-sl7c6J9w:1634474702587&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLw6rgvNHzAhWi2uAKHQF9AQcQ_AUoAXoECAIQAw&biw=1920&bih=937&dpr=1#imgrc=HXLlNEpHoJATkM"
					description="good man photo"
					title="Man"
					alt="Good Man"
					img="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
				/>
				<CardComp
					explore="https://www.publicdomainpictures.net/en/view-image.php?image=316756&picture=background-image"
					share="https://www.google.com/search?q=image&sxsrf=AOaemvI9FZ0hS8iCVH5vPFSHM-sl7c6J9w:1634474702587&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLw6rgvNHzAhWi2uAKHQF9AQcQ_AUoAXoECAIQAw&biw=1920&bih=937&dpr=1#imgrc=v_lcgG7X1hZauM"
					description="a cool pic the someone took it in Nature!"
					title="nature"
					alt="nature"
					img="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
				/>
			</div>
		);
	}
};

export default AllCards

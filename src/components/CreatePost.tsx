//after taking pictures in camera, user will be able to view photos, add caption and submit post
/*
post/makepost(screenshot, face, caption) 
    send -> screenshot, face, caption
    receive -> username cookie, create post cookie
*/
const Post = () => {
    return (
        <div>
            <h1>Approve your post and add a caption</h1>
            <button>Retake?</button>
            <button>Submit</button>
        </div>
    )
}

export default Post;
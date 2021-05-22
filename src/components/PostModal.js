import styled from 'styled-components';
import {useState} from "react";
import ReactPlayer from "react-player";
import {connect} from "react-redux";
import firebase from 'firebase';
import {postArticleAPI} from "../actions/index"

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");
    
    const handleChange = (e) => {
        const image = e.target.files[0];

        if(image === "" || image === undefined){
            alert(`not an image, the chosen file is ${typeof image}`);
            return;
        } 
        setShareImage(image)
    };
    const switchAssetArea = (area) =>{
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle = (e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),

        };

        props.postArticle(payload);
            reset(e);
        
    };

    const reset = (e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        props.handleClick(e);
    };

    return(
     <>
        {props.showModal === "open" &&
     <Container>
         <Content>
             <Header>
                 <h2>Create a Post</h2>
                 <button onClick = {(event) => reset(event)}>
                     <img src="/images/close-icon.svg" alt="" />
                 </button>
             </Header>
             <SharedContent>
                 <UserInfo>
                     <img src={props.user ? props.user.photoURL: "/images/user.svg"} alt="" />
                     <span>{props.user? props.user.displayName: "Name"}</span>
                 </UserInfo>
                 <Editor>
                 <textArea 
                    value = {editorText}
                    onChange = {(e) => setEditorText(e.target.value)}
                    placeholder = "What do you want to talk about?"
                    autoFocus = {true}>

                 </textArea>
                { assetArea === 'image' ?
                 <UploadImage>
                    <input 
                    type="file"  
                    accept = "image/gif image/jpeg image/png"
                    name = "image"
                    id = "file"
                    style = {{display: 'none'}}
                    onChange = {handleChange}

                    />
                    <p> 
                    <label htmlFor="file">Select an image to share.
                    </label> 
                    {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
                    </p>
                  </UploadImage>
                  :
                  assetArea === 'media'  && (
                    <>
                       <input 
                       type="text" 
                       placeholder = "Please input a video link"
                       value = {videoLink}
                       onChange = {(e) => setVideoLink(e.target.value)}

                       /> 
                       {
                           videoLink && (
                               <ReactPlayer width = {"100%"} url = {videoLink}/>
                           )}
                    </>
                   )
                  }
                 
                
                 </Editor>
                
             </SharedContent>
             <ShareCreation>
                <AttachAssets>
                    <AssetButton>
                        <img src="/images/share-post-icon.svg" alt="" />
                    </AssetButton>

                    <AssetButton onClick = { () => switchAssetArea("image")}>
                        <img src="/images/share-image.svg" alt="" />
                    </AssetButton>

                    <AssetButton onClick = { () => switchAssetArea("media")}>
                        <img src="/images/share-video.svg" alt="" />
                    </AssetButton>
                    <AssetButton>
                        <img src="/images/share-article.svg" alt="" />
                    </AssetButton>
                </AttachAssets>
                <ShareComment>
                    <AssetButton>
                        <img src="/images/comment-icon.svg" alt="" />
                        Anyone
                    </AssetButton>
                </ShareComment>
                <PostButton 
                    disabled ={!editorText ? true : false} 
                    onClick = {(event) => postArticle(event)}>
                    Post
                </PostButton>
             </ShareCreation>
         </Content>
        
     </Container>
        }
    </>
    )
};

const Container = styled.div`
   
   position: absolute;
   top:0;
   left: 0;
   right: 0;
   bottom:0;
   z-index: 999;
   background-color:rgba(0, 0, 0, 0.8);
   animation: fadeIn 0.3s;
`;

const Content = styled.div`
    grid-area: main;
    justify-content: center;
    width: 100%;
    max-width: 542px;    
    background-color :white;
    overflow: initial;
    border-radius: 5px;
    max-height: 90%;
    display: flex;
   
    flex-direction: column;
    
    top:32;
    margin: 20px 32px;
`;

const Header  =styled.header`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba( 0, 0, 0, 0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items:center;

    button{
        height: 40px;
        width: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.15);
        border: none;
        border-radius: 50%;

        svg, img{
            pointer-events:none;
        }
    }

`;


const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow :1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;

`;


const UserInfo = styled.div`
    display:flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img {
        width: 48px;
        height: 48px;
        background-clip:content-box;
        border: 2px solid transparent;
        border-radius:50%;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;
    }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;

`;

const AssetButton = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    padding-left: 4px;
    color: rgba(0, 0, 0, 0.5)
 
`;


const AttachAssets = styled.div`
    display: flex;
    align-items: center;
   
    ${AssetButton}{
        width: 40px;
    }
`;



const ShareComment = styled.div`
    margin-right: auto;
    border-left: 1px solid rgba( 0,0,0,0.15);    
    

`;

const PostButton = styled.button`
    min-width: 60px;
    min-width:60px;
    border-radius: 20px;
    background: ${(props) => props.disabled ? "rgba(0, 0, 0, 0.08)" : "#0a66c2"};
    padding: 0 16px;
    color:  ${(props) => props.disabled ? "rgba(0, 0, 0, 0.6)" : "white"};
    &:hover{
        background-color: ${(props) => props.disabled ? "none" : "#004182"};
    }
`;

const Editor = styled.div  `
    padding: 12px 4px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;
        border-color: rgba(0, 0, 0, 0.08);
    }
    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div `
    text-align: center;
    img{
    width: 100%;

    }
`;

const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    }
  }
const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);


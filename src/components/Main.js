import styled from "styled-components";
import PostModal from "./PostModal"

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        <div className="user">
          <img src="/images/user.svg" alt="" />
          <span> Start a post</span>
        </div>

        <div className = "flex-icons">

       
        <div className = "flex-icons1">
          <img src="/images/photo-icon.svg" alt="" />
          <span>Photo</span>
        </div>
        <div className = "flex-icons1">
          <img src="/images/video-icon.svg" alt="" />
          <span>Video</span>
        </div>
        <div className = "flex-icons1">
          <img src="/images/event-icon.svg" alt="" />
          <span>Event</span>
        </div>
        <div className = "flex-icons1">
          <img src="/images/artice-icon.svg" alt="" />
          <span>Write article</span>
        </div>
        </div>
      </ShareBox>
      <div>
      <Artice>
        <SharedActor>
        <a href=" ">
          <img src="/images/user.svg" alt = "" />
        

          <div>
              <span>Title </span>
              <span>Info </span>
              <span>Date</span>
           </div>
           </a>   
             <button>
              <img src="/images/dots-icon.svg" alt="" />
            </button>

          

        </SharedActor>
          <Description />
            Description
            <SharedImg>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuLRnLZWr-RceEhME_IKvV9gC7SGMCzc0Cw&usqp=CAU" alt="" />
            </SharedImg>
            <SocialCounts>
              <li>
                <button>
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                  <span>75</span>
               </button>
              </li>
              <li>
                <a href=" ">2 comments</a>
              </li>
            </SocialCounts>
            <SocialActions>
              
           
            <button>
                <img src="/images/like-icon.svg" alt="" />
                <span>Like</span>
            </button>
              
              <button>
                <img src="/images/comment-icon.svg" alt="" />
                <span>Comment</span>
              </button> 
            
              <button>
                <img src="/images/share-icon.svg" alt="" />
                <span>Share</span>
              </button>
               
            
            <button>
                <img src="/images/send-icon.svg" alt="" />
                <span>Send</span>
            </button>
            </SocialActions>
      </Artice>
      </div>
      <PostModal/>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), rgb(0 0 0 / 20%);

  .photo-icon {
    color: rgb(112, 189, 241);
  }
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
 

  .user{
    margin: 6px;
    display: flex;
    align-items: flex-start;
    align-items: center;
    justify-items: space-evenly;
    
    >span{
        margin: 8px 15px;
        padding: 20px 50px;
        border: 1px solid #d6cec2;
        border-radius: 52px;
        position: relative;
        width: 100%;
        text-align: left;
        background-color: white;
        font-weight: 600;

        :hover{
            background-color: rgba(0, 0, 0, 0.08);
            color: rgba(0,0,0,0.6);
        }
    }
    >img{
        border-radius: 50%;
        width: 60px;
        
    }

  }
    .flex-icons{
       display: flex;
       flex-direction: row;
       justify-content: space-evenly;
       padding: 10px 0;
  }

    .flex-icons1{
      padding: 6px;
      border-radius: 8px;
      >img{
        margin: 0 8px  0;
       }
      >span{
          color: #70b5f9;
          font-weight: 600;
      }
    }
   

   div{
       align-items: center;
       display: flex;
   }

   @media(max-width: 768px){
       position: relative;
       justify-content: center;
       width: 100%;
       }
   
   @media(max-width: 532px){
       position: relative;
       flex-wrap: wrap;
       padding: 0;
       margin: 0;
   }
`;

const Artice = styled(CommonCard)`
    padding: 0;
    margin: 0 8px;
    overflow: visible;

`;

const SharedActor = styled.div`
  padding-right :40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
 
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

     & > div{
       display: flex;
       flex-direction: column;
       flex-grow: 1;
       flex-basis: 0;
       margin-left: 8px;
       overflow: hidden;
       span{
         text-align: left;
         &:first-child{
           font-size:14px;
           font-weight: 700;
           color: rgba(0, 0, 0, 1);
         }
         &:nth-child(n + 1){
           font-size:12px;
           color: rgba(0, 0, 0, 0.6);

         }
       }

    }
  }

  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }`;

const Description = styled.div`
  padding :0 16px;
  overflow: hidden;
  color: rgba( 0,0,0,0.9);
  font-size: 14px;
  text-align: left;
  
  button{
    
  }
`;


const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  `;
  
  const SocialCounts = styled.ul`
    line-height: 1.3;
    display :flex;
    align-items: flex-start;
    text-decoration: none;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;
    li{
      margin-right: 5px;
      font-size: 12px;
      
    }  
  `;

const SocialActions = styled.div`
  align-items :center;
  display: flex;
  justify-content :flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 2px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: grey;
    background-color :white;
    border: none;
    border-radius: 8px;
    margin: 0 15px;
    :onhover{
      background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }

    @media (min-width :768px){
      span{
        margin-left: 8px;
      }
    }
  }
  
  
`;

export default Main;

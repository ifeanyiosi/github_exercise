// import React, { useContext } from "react";
// import { Redirect } from "react-router-dom";
// import Styled from "styled-components";
// import { AuthContext } from "../App";
// import './home.scss'


// export default function Home() {
//   // const { state, dispatch } = useContext(AuthContext);

//   // if (!state.isLoggedIn) {
//   //   return <Redirect to="/login" />;
//   // }

//   const { avatar_url, name, public_repos, followers, following } = state.user

//   // const handleLogout = () => {
//   //   dispatch({
//   //     type: "LOGOUT"
//   //   });
//   // } 

//   return (
//     <div>
//       <div className="container">
//         <button onClick={()=> handleLogout()}>Logout</button>
//         <div>
//           <div className="content">
//             <img src={avatar_url} alt="Avatar"/>
//             <span>{name}</span>
//             <span>{public_repos} Repos</span>
//             <span>{followers} Followers</span>
//             <span>{following} Following</span>
//           </div>
//         </div>
        
//       </div>

//       <h1>hello </h1>
//     </div>
//   );
// }

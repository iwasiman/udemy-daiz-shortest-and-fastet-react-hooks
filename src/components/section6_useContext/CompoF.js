import React, {useContext} from 'react'
import {MyUserContext, MyLanguageContext} from '../../App'

const CompoF = () => {
  const user = useContext(MyUserContext)
  const lang = useContext(MyLanguageContext)
  return (
    <div>
      <h3>CompoF</h3>
      <div>Appから渡されたコンテキストの中身 {user.name} {user.age} {lang}</div>
      {/*<MyUserContext.Consumer>
        {
          (user) => {
                    return <div>Appから渡されたコンテキストの中身 {user.name} {user.age} </div>
          }
        }
      </MyUserContext.Consumer>*/}
    </div>
  )
}
// Consumer二重入れ子が動かなかった。ネストも講習のコードと等しいはずだが……→最終的には不要。
// return (
//   <div>
//     <h3>CompoF</h3>
//     <MyUserContext.Consumer>
//       {
//         (user) => {
//           return (
//             <MyLanguageContext.Consumer>
//               {
//                 (language) => {
//                   return <div>Appから渡されたコンテキストの中身 {user.name} {user.age} {language}</div>
//                 }
//               }
//             </MyLanguageContext.Consumer>
//           )
//         }
//       }
//     </MyUserContext.Consumer>
//   </div>
// )


export default CompoF
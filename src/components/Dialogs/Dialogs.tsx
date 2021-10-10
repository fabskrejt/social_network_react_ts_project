import React from "react";
import dStyle from './Dialogs.module.css'
const Dialogs = () => {
    return(
    <div className={dStyle.dialogPage}>
         <div className={dStyle.users}>
             <div className={dStyle.usersItem}>Rusik</div>
             <div className={dStyle.usersItem}>Toshik</div>
             <div className={dStyle.usersItem}>Vovchick</div>
             <div className={dStyle.usersItem}>Dimas</div>
             <div className={dStyle.usersItem}>Kisli</div>

         </div>
        <div className={dStyle.dialogs}>
            <div className={dStyle.dialogsItem}> Message 1</div>
            <div className={dStyle.dialogsItem}> Message 2</div>
            <div className={dStyle.dialogsItem}> Message 3</div>
            <div className={dStyle.dialogsItem}> Message 4</div>
            <div className={dStyle.dialogsItem}> Message 5</div>

        </div>
    </div>
    )
}

export default Dialogs
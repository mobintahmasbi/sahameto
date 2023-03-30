import { useState } from "react";


function BtnTitle() {
    
    const [handler, sethandler] = useState(true)

    return (
    <>
        <div className="container-btns">
            <div className={ handler ? "btn clicked": "btn notclicked"} onClick= {() => {
                if(handler){
                    return
                }else{
                    sethandler(true)
                }
            } }>
                سرمایه گذاری در بورس
            </div>
            <div className={ handler ? "btn notclicked" : "btn clicked"} onClick= {() => {
                if(handler){
                    sethandler(false)
                }else{
                    return
                }
            } }>
                سرمایه گذاری در ارزدیجیتال
            </div>
        </div>
    </>
  )
  
}

export default BtnTitle;

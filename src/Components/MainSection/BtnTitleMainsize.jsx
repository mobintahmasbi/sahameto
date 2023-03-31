import { useState } from "react"


function BtnTitleMainsize() {
    
    const [handler, sethandler] = useState(true)

    return (
    <>
        <div className="container-btns cb-main-size">
            <div className={ handler ? "btn-main-size clicked": "btn-main-size notclicked"} onClick= {() => {
                if(handler){
                    return
                }else{
                    sethandler(true)
                }
            } }>
                سرمایه گذاری در بورس
            </div>
            <div className={ handler ? "btn-main-size notclicked" : "btn-main-size clicked"} onClick= {() => {
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

export default BtnTitleMainsize;
